import os
import struct
import pytest
from bfportal_grpc import play_pb2
from bfportal_grpc.proto.play_pb2_grpc import WebPlayStub
from tests.conftest import gateway_session_id, web_headers
import httpcore


@pytest.fixture
def stub(web_channel):
    yield WebPlayStub(web_channel)


compression_flag = b"\x00"


async def test_get_playground(playground_id, request_metadata, stub):
    serialized_msg = play_pb2.GetPlayElementRequest(
        id=playground_id, includeDenied=True
    ).SerializeToString()
    msg_length = struct.pack(">I", len(serialized_msg))
    length_prefixed_msg = compression_flag + msg_length + serialized_msg
    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/getPlayElement",
            headers=await web_headers(os.getenv("GATEWAY_SESSION_ID", None)),
            content=length_prefixed_msg,
        )
        print(response.content)
        return response.content

    # playground = response.playground.validatedPlayground

    # assert playground is not None
    # assert playground.playgroundId == playground_id
    # assert playground.name == "Portal Helper Discord Bot's Api test field"


# async def test_share_playground(playground_id, request_metadata, stub):
#     response: communitygames_pb2.SharePlaygroundResponse = await stub.sharePlayground(
#         communitygames_pb2.SharePlaygroundRequest(playgroundId=playground_id),
#         metadata=request_metadata,
#     )
#     assert response.shortCode.code == "aau5d1"
