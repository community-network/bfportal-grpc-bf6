import httpcore
from bfportal_grpc_bf6 import localization_pb2, localization_pb2_grpc
from tests.conftest import to_length_prefixed_msg


async def test_localization(request_metadata):
    serialized_msg = localization_pb2.GetTranslationsRequest(
        locale="en-US"
    ).SerializeToString()
    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/ssantiago.web.localization.ClientLocalization/getTranslations",
            headers=request_metadata,
            content=to_length_prefixed_msg(serialized_msg),
        )
        print(response.content)
        return response.content
