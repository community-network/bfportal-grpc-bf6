import { createChannel, Metadata, createClientFactory } from "nice-grpc-web";
import { ClientLocalizationDefinition } from "../src/proto/localization";
import { sessionId } from './config';

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
    const webClient = client.create(ClientLocalizationDefinition, channel);

    const response = await webClient.getTranslations({});
    expect(response.localizedTexts.length).not.toEqual(0);
});
