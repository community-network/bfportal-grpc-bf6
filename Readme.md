# Battlefield Portal web-grpc

This npm and python package can be used to directly call the https://portal.battlefield.com/ api.
we're making this public since you can read the javascript of the website and figure this out yourself easily anyway, but we want to make sure only 1 github repo has to be kept in sync with the api and the rest that uses it just has to update a package and a few code changes to still have it work.

https://www.npmjs.com/package/bfportal-grpc-bf6

https://pypi.org/project/bfportal_grpc_bf6/

## Typescript usage example

```js
import { createChannel, Metadata, createClientFactory } from "nice-grpc-web";
import { play, access_token } from "bfportal-grpc-bf6";

(async () => {
  const accessToken = await getBf6GatewaySession({ sid: "", remid: "" });
  const session = await access_token.getWebAccessToken(accessToken!);

  const channel = createChannel("https://santiago-prod-wgw-envoy.ops.dice.se");
  const client = createClientFactory().use((call, options) =>
    call.next(call.request, {
      ...options,
      metadata: Metadata(options.metadata)
        .set('x-dice-tenancy', 'prod_default-prod_default-santiago-common')
        .set('x-gateway-session-id', session.sessionId)
        .set('x-grpc-web', '1')
    }),
  );

  const webPlayClient = client.create(play.WebPlayDefinition, channel);

  const response = await webPlayClient.getPlayElement({ id: "c7dff320-a543-11f0-8e01-a29ee389d262", includeDenied: true });
  console.log(response.playElement?.name);
})()


```

## Python usage example

```py
from bfportal_grpc_bf6 import play_pb2, converter, access_token
import httpcore

async def main():
    cookie = access_token.Cookie(sid="", remid="")
    token = await access_token.getBf6GatewaySession(cookie)
    res = await access_token.get_web_access_token(token)
    session_id = res.get("sessionId", "")

    serialized_msg = play_pb2.GetPlayElementRequest(
        id=playground_id, includeDenied=True
    ).SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = converter.to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/getPlayElement",
            headers={
                "content-type": "application/grpc-web+proto",
                "x-dice-tenancy": "prod_default-prod_default-santiago-common",
                "x-gateway-session-id": session_id,
                "x-grpc-web": "1",
                "x-user-agent": "grpc-web-javascript/0.1",
            },
            content=msg,
        )

        serialized_message = converter.from_length_prefixed_msg(response.content)
        message = play_pb2.PlayElementResponse()
        message.ParseFromString(serialized_message)
        print(message.playElement.name)

if __name__ == "__main__":
    asyncio.run(main())
```

### Building the proto translations

Build the typescript variant with with:
```shell
./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./src/proto \
  --ts_proto_opt=env=browser,outputServices=nice-grpc,outputServices=generic-definitions,outputJsonMethods=false,useExactTypes=false \
  --proto_path=./proto \
  ./proto/authentication.proto ./proto/localization.proto ./proto/play.proto ./proto/reporting.proto
  ```

Building for python requires grpcio-tools, which can be installed with:
```shell
pip3 install grpcio-tools
```

And can be build with:
```shell
poetry run compile-proto
```

Python package used: https://github.com/romnn/proto-compile

### Pushing your changes

Package versions can be made with `npm run build` and `npm version patch` `git push --tags origin main` to release.
for python `poetry build`.

Example library used for this project: https://github.com/tomchen/example-typescript-package
