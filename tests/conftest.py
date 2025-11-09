import os
import pytest
import sonora.aio
from dotenv import load_dotenv

load_dotenv()


@pytest.fixture()
def gateway_session_id() -> str:
    _ = os.getenv("GATEWAY_SESSION_ID", None)
    if _ is None:
        pytest.fail("GATEWAY_SESSION_ID env variable needs to be set.")
    return _


@pytest.fixture()
def request_metadata(gateway_session_id):
    return (
        ("x-dice-tenancy", "prod_default-prod_default-santiago-common"),
        ("x-gateway-session-id", gateway_session_id),
        ("x-grpc-web", "1"),
        ("x-user-agent", "grpc-web-javascript/0.1"),
    )


@pytest.fixture()
def playground_id() -> str:
    return "8c7632c0-bd82-11f0-a9cc-6730f9b9f4da"


async def web_headers(gateway_session_id: str) -> dict:
    return {
        "content-type": "application/grpc-web+proto",
        "x-dice-tenancy": "prod_default-prod_default-santiago-common",
        "x-gateway-session-id": gateway_session_id,
        "x-grpc-web": "1",
        "x-user-agent": "grpc-web-javascript/0.1",
    }


@pytest.fixture
async def web_channel() -> "sonora.aio.WebChannel":
    async with sonora.aio.insecure_web_channel(
        "https://santiago-prod-wgw-envoy.ops.dice.se"
    ) as channel:
        yield channel
