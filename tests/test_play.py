import base64
from bfportal_grpc_bf6 import play_pb2
import httpcore
import json

from google.protobuf.json_format import MessageToDict, MessageToJson

from bfportal_grpc_bf6.converter import from_length_prefixed_msg, to_length_prefixed_msg


async def test_get_playground(playground_id, request_metadata):
    serialized_msg = play_pb2.GetPlayElementRequest(
        id=playground_id, includeDenied=True
    ).SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/getPlayElement",
            headers=request_metadata,
            content=msg,
        )

        serialized_message = from_length_prefixed_msg(response.content)
        message = play_pb2.PlayElementResponse()
        message.ParseFromString(serialized_message)
        # print(MessageToDict(message))
        # with open("test.json", "w", encoding="utf-8") as f:
        #     json.dump(MessageToDict(message), f, ensure_ascii=False, indent=4)
        assert message.playElement.name == "Breakthrough Solo Bots"
