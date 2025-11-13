# Battlefield Portal web-grpc

This npm and python package can be used to directly call the https://portal.battlefield.com/ api.
we're making this public since you can read the javascript of the website and figure this out yourself easily anyway, but we want to make sure only 1 github repo has to be kept in sync with the api and the rest that uses it just has to update a package and a few code changes to still have it work.

https://www.npmjs.com/package/bfportal-grpc

https://pypi.org/project/bfportal-grpc/

## example

```js
import { CommunityGamesClient, communitygames } from 'bfportal-grpc'

const communityGames = new CommunityGamesClient(
  'https://kingston-prod-wgw-envoy.ops.dice.se',
  null
)
const metadata = {
  'x-dice-tenancy': 'prod_default-prod_default-kingston-common',
  'x-gateway-session-id': sessionId,
  'x-grpc-web': '1',
  'x-user-agent': 'grpc-web-javascript/0.1',
}

const request = new communitygames.GetPlaygroundRequest()
request.setPlaygroundid(testPlayground)
const response = await communityGames.getPlayground(request, metadata)
const modRules = response
  .getPlayground()
  ?.getOriginalplayground()
  ?.getModrules()
  ?.getCompatiblerules()
  ?.getRules()
if (modRules instanceof Uint8Array) {
  console.log(new TextDecoder().decode(modRules))
}
const playgroundName = response
  .getPlayground()
  ?.getOriginalplayground()
  ?.getName()
```

the proto files are accessable directly via "node_modules/bfportal-grpc/proto/communitygames.proto" to for example decode to json:

```js
import { load } from 'protobufjs'

// use reponse from previous example
const root = await load('node_modules/bfportal-grpc/proto/communitygames.proto')
const AwesomeMessage = root.lookupType(
  'web.communitygames.PlaygroundInfoResponse'
)
const decoded = AwesomeMessage.decode(response.serializeBinary())
const json_str = JSON.stringify(decoded, null, 4)
```

### non-async example

```js
import { CommunityGamesClient, communitygames } from 'bfportal-grpc'

const communityGames = new CommunityGamesClient(
  'https://kingston-prod-wgw-envoy.ops.dice.se',
  null
)
const metadata = {
  'x-dice-tenancy': 'prod_default-prod_default-kingston-common',
  'x-gateway-session-id': sessionId,
  'x-grpc-web': '1',
  'x-user-agent': 'grpc-web-javascript/0.1',
}

const request = new communitygames.GetPlaygroundRequest()
request.setPlaygroundid('bbe433c0-13fa-11ed-bc32-24a8c2c0764e')
const call = communityGames.getPlayground(
  request,
  metadata,
  (_err: grpcWeb.Error, response: communitygames.PlaygroundInfoResponse) => {
    // console.log("err:", _err)
    var modRules = response
      .getPlayground()
      ?.getOriginalplayground()
      ?.getModrules()
      ?.getCompatiblerules()
      ?.getRules()
    if (modRules instanceof Uint8Array) {
      console.log(new TextDecoder().decode(modRules))
    }

    load(
      'node_modules/bfportal-grpc/proto/communitygames.proto',
      function (err, root) {
        if (err) throw err
        if (root == undefined) return

        const AwesomeMessage = root.lookupType(
          'web.communitygames.PlaygroundInfoResponse'
        )

        let decoded = AwesomeMessage.decode(response.serializeBinary())
        fs.writeFile(
          'test.json',
          JSON.stringify(decoded, null, 4),
          function (err: any) {
            if (err) {
              console.log(err)
            }
          }
        )
      }
    )
  }
)
```

## python

for python you can use the 'httpcore' package for http2

```py
from bfportal_grpc_bf6 import play_pb2, converter, access_token
import httpcore

async def main():
    cookie = access_token.Cookie(sid="", remid="")
    token = await access_token.getBf6GatewaySession(cookie)
    res = await access_token.get_web_access_token(token)
    access_token = res.get("sessionId", "")

    serialized_msg = play_pb2.GetPlayElementRequest(
        id=playground_id, includeDenied=True
    ).SerializeToString()

    async with httpcore.AsyncConnectionPool(http2=True, keepalive_expiry=30) as session:
        msg = converter.to_length_prefixed_msg(serialized_msg)
        response = await session.request(
            "POST",
            "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/getPlayElement",
            headers=request_metadata,
            content=msg,
        )

        serialized_message = converter.from_length_prefixed_msg(response.content)
        message = play_pb2.PlayElementResponse()
        message.ParseFromString(serialized_message)
        print(message.playElement.name)

if __name__ == "__main__":
    asyncio.run(main())
```

### current build method from proto to javascript via python

needs proto-compile, which can be installed with:
```shell
pip3 install proto-compile
```

and build with:
```shell
proto-compile --clear-output-dirs --verbosity=1 ./proto ./src/proto grpc-web --grpc_web_out_options="import_style=typescript,mode=grpcweb"
```

building for python requires grpcio-tools, which can be installed with:
```shell
pip3 install grpcio-tools
```

and build with:
```shell
poetry run compile-proto
```

python package used: https://github.com/romnn/proto-compile

### Pushing your changes

package versions can be made with `npm run build` and `npm version patch` `git push --tags origin main` to release.
for python `poetry build`.

example library used: https://github.com/tomchen/example-typescript-package
