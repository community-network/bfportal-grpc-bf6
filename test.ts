import { play, authentication, localization } from './src/index';
// import { Platform } from './src/proto/authentication';
global.XMLHttpRequest = require('xhr2');
import { load } from "protobufjs";
// import { load } from "protobufjs";
// import { sessionId, testPlayground } from './test/config';


(async () => {
    const metadata = {
        "content-type": "application/grpc-web+proto",
        'x-dice-tenancy': 'prod_default-prod_default-santiago-common',
        'x-gateway-session-id': "web-feb27f23-6250-4dad-a35a-e2023799a451",
        'x-grpc-web': '1',
        "x-user-agent": "grpc-web-javascript/0.1",
    }
    const request = new play.GetPlayElementRequest();
    request.setId("c7dff320-a543-11f0-8e01-a29ee389d262")
    request.setIncludedenied(true)

    const messageBuffer = request.serializeBinary()
    const compressionFlag = 0; // 0 = uncompressed
    const length = messageBuffer.length;
    const prefix = Buffer.alloc(5);
    prefix.writeUInt8(compressionFlag, 0);
    prefix.writeUInt32BE(length, 1);

    const lengthPrefixedMessage = Buffer.concat([prefix, messageBuffer]);
    // const base64 = btoa(
    //     new Uint8Array(lengthPrefixedMessage)
    //         .reduce((data, byte) => data + String.fromCharCode(byte), '')
    // );

    const res = await fetch("https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay/getPlayElement", {
        method: "post",
        body: lengthPrefixedMessage,
        headers: metadata
    });
    const body = await res.bytes();
    console.log(body);
})()
