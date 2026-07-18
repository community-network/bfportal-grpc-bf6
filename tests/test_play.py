import base64
from bfportal_grpc_bf6 import play_pb2
import httpcore
from google.protobuf.json_format import MessageToDict, MessageToJson

from bfportal_grpc_bf6.converter import from_length_prefixed_msg, to_length_prefixed_msg
from tests.to_file import to_file


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
        to_file("WebPlay", "getPlayElement", message)
        assert message.playElement.name == "Snipers vs Runners v1"


async def test_get_owned_play_elements(request_metadata):
    serialized_msg = play_pb2.GetOwnedPlayElementsRequest(
        publishStates=[
            play_pb2.PublishStateType.PUBLISH_STATE_TYPE_DRAFT,
            play_pb2.PublishStateType.PUBLISH_STATE_TYPE_PUBLISHED,
            play_pb2.PublishStateType.PUBLISH_STATE_TYPE_ERROR,
        ],
        includeDenied=True,
    ).SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/getOwnedPlayElementsV2",
            headers=request_metadata,
            content=msg,
        )
        serialized_message = from_length_prefixed_msg(response.content)
        message = play_pb2.GetOwnedPlayElementsResponseV2()
        message.ParseFromString(serialized_message)
        to_file("WebPlay", "getOwnedPlayElementsV2", message)
        assert message.playElements[0].playElement.name == "Custom Draft"


async def test_get_scheduled_blueprint(request_metadata):
    serialized_msg = play_pb2.GetScheduledBlueprintsRequest().SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/getScheduledBlueprints",
            headers=request_metadata,
            content=msg,
        )
        serialized_message = from_length_prefixed_msg(response.content)
        message = play_pb2.GetScheduledBlueprintsResponse()
        message.ParseFromString(serialized_message)
        to_file("WebPlay", "getScheduledBlueprints", message)
        assert len(message.blueprintIds) >= 1

    serialized_msg = play_pb2.GetBlueprintsByIdRequest(
        blueprintIds=message.blueprintIds
    ).SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/getBlueprintsById",
            headers=request_metadata,
            content=msg,
        )
        serialized_message = from_length_prefixed_msg(response.content)
        message = play_pb2.GetBlueprintsByIdResponse()
        message.ParseFromString(serialized_message)
        to_file("WebPlay", "getBlueprintsById", message)

        assert len(message.blueprints) >= 1


async def test_get_progression_types(request_metadata):
    serialized_msg = play_pb2.GetProgressionTypesRequest().SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/GetProgressionTypes",
            headers=request_metadata,
            content=msg,
        )
        serialized_message = from_length_prefixed_msg(response.content)
        message = play_pb2.GetProgressionTypesResponse()
        message.ParseFromString(serialized_message)
        to_file("WebPlay", "GetProgressionTypes", message)
        assert len(message.entries) >= 1


async def test_get_license_requirements(request_metadata):
    serialized_msg = play_pb2.GetLicenseRequirementsRequest().SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/GetLicenseRequirements",
            headers=request_metadata,
            content=msg,
        )
        serialized_message = from_length_prefixed_msg(response.content)
        message = play_pb2.GetLicenseRequirementsResponse()
        message.ParseFromString(serialized_message)
        to_file("WebPlay", "GetLicenseRequirements", message)
        assert len(message.mapEntryRequirements) >= 1
        assert len(message.ownedLicenses) >= 1


async def test_get_available_tags(request_metadata):
    serialized_msg = play_pb2.GetAvailableTagsRequest().SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/GetAvailableTags",
            headers=request_metadata,
            content=msg,
        )
        serialized_message = from_length_prefixed_msg(response.content)
        message = play_pb2.GetAvailableTagsResponse()
        message.ParseFromString(serialized_message)
        to_file("WebPlay", "GetAvailableTags", message)
        assert len(message.availableTags.tags) >= 1


async def test_list_experiences(request_metadata):
    serialized_msg = play_pb2.ListExperiencesRequest().SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/ListExperiences",
            headers=request_metadata,
            content=msg,
        )
        serialized_message = from_length_prefixed_msg(response.content)
        message = play_pb2.ListExperiencesResponse()
        message.ParseFromString(serialized_message)
        to_file("WebPlay", "ListExperiences", message)
        assert len(message.experiences) >= 1
