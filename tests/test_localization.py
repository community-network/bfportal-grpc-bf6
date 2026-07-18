import base64
from bfportal_grpc_bf6 import localization_pb2
import httpcore
from google.protobuf.json_format import MessageToDict, MessageToJson

from bfportal_grpc_bf6.converter import from_length_prefixed_msg, to_length_prefixed_msg
from tests.to_file import to_file


async def test_get_playground(request_metadata):
    serialized_msg = localization_pb2.GetTranslationsRequest().SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.localization.ClientLocalization/getTranslations",
            headers=request_metadata,
            content=msg,
        )
        serialized_message = from_length_prefixed_msg(response.content)
        message = localization_pb2.GetTranslationsResponse()
        message.ParseFromString(serialized_message)
        to_file("ClientLocalization", "getTranslations", message)
        assert len(message.localizedTexts) >= 1
