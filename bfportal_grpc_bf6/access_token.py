import asyncio
import aiohttp
from urllib.parse import urlsplit, parse_qs


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


# if __name__ == "__main__":
#     asyncio.run(getBf6GatewaySession(Cookie()))
