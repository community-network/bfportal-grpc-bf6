import asyncio
import base64
import aiohttp
from urllib.parse import urlsplit, parse_qs

import httpcore
from google.protobuf.json_format import MessageToDict, MessageToJson

from bfportal_grpc_bf6 import converter
from bfportal_grpc_bf6.proto import authentication_pb2


class Cookie:
    sid: str
    remid: str

    def __init__(self, sid: str, remid: str):
        self.sid = sid
        self.remid = remid


async def getBf6GatewaySession(cookie: Cookie) -> str | None:
    async with aiohttp.ClientSession() as session:
        url = "https://accounts.ea.com/connect/auth?client_id=GLACIER_COMP_APP&locale=en_US&redirect_uri=https%3A%2F%2Fportal.battlefield.com%2Fbf6&response_type=code&state=https%3A%2F%2Fportal.battlefield.com%2Fbf6"
        headers = {"Cookie": f"sid={cookie.sid}; remid={cookie.remid};"}
        async with session.get(url=url, headers=headers, allow_redirects=False) as r:
            redirect = r.headers["Location"]
            query = urlsplit(redirect).query
            params = parse_qs(query)
            access_code = params.get("code", [])
            return next(iter(access_code), None)


async def get_web_access_token(access_token: str):
    serialized_msg = authentication_pb2.AuthCodeAuthentication(
        authCode=access_token,
        platform=authentication_pb2.Platform.PC,
        redirectUri=authentication_pb2.MutatorString(
            stringValue="https://portal.battlefield.com/bf6"
        ),
    ).SerializeToString()
    msg = converter.to_length_prefixed_msg(serialized_msg)
    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.authentication.WebAuthentication/viaAuthCode",
            headers={
                "content-type": "application/grpc-web+proto",
                "x-dice-tenancy": "prod_default-prod_default-santiago-common",
                "x-grpc-web": "1",
                "x-user-agent": "grpc-web-javascript/0.1",
            },
            content=msg,
        )
        serialized_message = converter.from_length_prefixed_msg(response.content)
        message = authentication_pb2.AuthenticationResponse()
        message.ParseFromString(serialized_message)
        return MessageToDict(message)
