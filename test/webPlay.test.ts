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

test('getScheduledBlueprints', async () => {
    const webClient = client.create(WebPlayDefinition, channel);

    const response = await webClient.getScheduledBlueprints({});
    const res = await webClient.getBlueprintsById({ ...response })
    expect(res.blueprints.length).not.toEqual(0);
});

test('GetProgressionTypes', async () => {
    const webClient = client.create(WebPlayDefinition, channel);

    const response = await webClient.getProgressionTypes({});
    expect(response.entries.length).not.toEqual(0);
});

test('GetLicenseRequirements', async () => {
    const webClient = client.create(WebPlayDefinition, channel);

    const response = await webClient.getLicenseRequirements({});
    expect(response.ownedLicenses.length).not.toEqual(0);
});

test('GetAvailableTags', async () => {
    const webClient = client.create(WebPlayDefinition, channel);

    const response = await webClient.getAvailableTags({});
    expect(response.availableTags?.tags.length).not.toEqual(0);
});


test('ListExperiences', async () => {
    const webClient = client.create(WebPlayDefinition, channel);

    const response = await webClient.listExperiences({});
    expect(response.experiences.length).not.toEqual(0);
});