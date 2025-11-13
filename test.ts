import { createChannel, Metadata, createClientFactory } from "nice-grpc-web";
import { WebPlayDefinition } from "./src/proto/play";

(async () => {
    const channel = createChannel("https://santiago-prod-wgw-envoy.ops.dice.se");
    const client = createClientFactory().use((call, options) =>
        call.next(call.request, {
            ...options,
            metadata: Metadata(options.metadata)
                .set('x-dice-tenancy', 'prod_default-prod_default-santiago-common')
                .set('x-gateway-session-id', "web-4ad46558-785a-4aeb-9dd7-e44355d8d6ab")
                .set('x-grpc-web', '1')
        }),
    );

    const webPlayClient = client.create(WebPlayDefinition, channel);

    const response = await webPlayClient.getPlayElement({ id: "c7dff320-a543-11f0-8e01-a29ee389d262", includeDenied: true });
    console.log(response.playElement?.name);
})()
