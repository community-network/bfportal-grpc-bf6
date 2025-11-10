import base64
import json
import struct
from bfportal_grpc_bf6 import play_pb2
import httpcore

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
        assert message.playElement.name == "Breakthrough Solo Bots"


# async def test_share_playground(playground_id, request_metadata, stub):
#     response: communitygames_pb2.SharePlaygroundResponse = await stub.sharePlayground(
#         communitygames_pb2.SharePlaygroundRequest(playgroundId=playground_id),
#         metadata=request_metadata,
#     )
#     assert response.shortCode.code == "aau5d1"
