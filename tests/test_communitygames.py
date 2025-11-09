from bfportal_grpc import play_pb2
import httpcore
from tests.conftest import to_length_prefixed_msg


async def test_get_playground(playground_id, request_metadata):
    serialized_msg = play_pb2.GetPlayElementRequest(
        id=playground_id, includeDenied=True
    ).SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/getPlayElement",
            headers=request_metadata,
            content=to_length_prefixed_msg(serialized_msg),
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
