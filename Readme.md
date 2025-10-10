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

for python you can use the 'sonora' package to do grpc-web

```py
import asyncio
import sonora.aio
from bfportal_grpc import communitygames_pb2, communitygames_pb2_grpc, access_token, authentication_pb2, authentication_pb2_grpc

async def main():
    cookie = access_token.Cookie(sid="", remid="")
    token = await access_token.getBf2042GatewaySession(cookie)

    async with sonora.aio.insecure_web_channel(
        f"https://kingston-prod-wgw-envoy.ops.dice.se"
    ) as channel:
        stub = authentication_pb2_grpc.AuthenticationStub(channel)
        auth_response: authentication_pb2.AuthResponse = await stub.viaAuthCode(authentication_pb2.AuthRequest(platform=1, authCode=token, redirectUri='https://portal.battlefield.com/'), metadata=(
            ('x-dice-tenancy', 'prod_default-prod_default-kingston-common'),
            ('x-grpc-web', '1'),
            ('x-user-agent', 'grpc-web-javascript/0.1')
        ))

        stub = communitygames_pb2_grpc.CommunityGamesStub(channel)
        response: communitygames_pb2.PlaygroundInfoResponse = await stub.getPlayground(communitygames_pb2.GetPlaygroundRequest(playgroundId="10992a10-461a-11ec-8de0-d9f491f92236"), metadata=(
            ('x-dice-tenancy', 'prod_default-prod_default-kingston-common'),
            ('x-gateway-session-id', auth_response.sessionId),
            ('x-grpc-web', '1'),
            ('x-user-agent', 'grpc-web-javascript/0.1')
        ))

        print(response.playground.originalPlayground.name)

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
