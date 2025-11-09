import os
import struct
import pytest
from dotenv import load_dotenv

load_dotenv()

compression_flag = b"\x00"


@pytest.fixture()
def gateway_session_id() -> str:
    _ = os.getenv("GATEWAY_SESSION_ID", None)
    if _ is None:
        pytest.fail("GATEWAY_SESSION_ID env variable needs to be set.")
    return _


def to_length_prefixed_msg(serialized_msg: bytes):
    msg_length = struct.pack(">I", len(serialized_msg))
    return compression_flag + msg_length + serialized_msg


def from_length_prefixed_msg(serialized_msg: bytes):
    compression_flag = serialized_msg[0]
    message_length = struct.unpack(">I", serialized_msg[1:5])[0]
    return serialized_msg[5 : 5 + message_length]


@pytest.fixture()
def request_metadata(gateway_session_id):
    return {
        "content-type": "application/grpc-web+proto",
        "x-dice-tenancy": "prod_default-prod_default-santiago-common",
        "x-gateway-session-id": gateway_session_id,
        "x-grpc-web": "1",
        "x-user-agent": "grpc-web-javascript/0.1",
    }


@pytest.fixture()
def playground_id() -> str:
    return "4e8b2f70-a742-11f0-a8ef-d7e10093ca02"
