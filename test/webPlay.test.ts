import { createChannel, Metadata, createClientFactory } from "nice-grpc-web";
import { WebPlayDefinition, PublishStateType } from "../src/proto/play";
import { sessionId, testPlayground } from './config';

const channel = createChannel("https://santiago-prod-wgw-envoy.ops.dice.se");
const client = createClientFactory().use((call, options) =>
    call.next(call.request, {
        ...options,
        metadata: Metadata(options.metadata)
            .set('x-dice-tenancy', 'prod_default-prod_default-santiago-common')
            .set('x-gateway-session-id', sessionId)
            .set('x-grpc-web', '1')
    }),
);

test('getPlayElement', async () => {
    const webClient = client.create(WebPlayDefinition, channel);

    const response = await webClient.getPlayElement({ id: testPlayground, includeDenied: true });
    expect(typeof response.playElement?.name).toBe("string");
});

test('getOwnedPlayElements', async () => {
    const webClient = client.create(WebPlayDefinition, channel);

    const response = await webClient.getOwnedPlayElements({ publishStates: [PublishStateType.PUBLISH_STATE_TYPE_PUBLISHED], includeDenied: true });
    expect(response.playElements.length).not.toEqual(0);
});

test('GetProgressionTypes', async () => {
    const webClient = client.create(WebPlayDefinition, channel);

    const response = await webClient.getProgressionTypes({});
    expect(response.entries.length).not.toEqual(0);
});