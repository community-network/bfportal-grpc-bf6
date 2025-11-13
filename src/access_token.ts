import { createChannel, Metadata, createClientFactory } from "nice-grpc-web";
import { WebAuthenticationDefinition, Platform, AuthenticationResponse } from "./proto/authentication";

export interface Cookie {
  sid: string;
  remid: string;
}

export const getBf6GatewaySession = async (cookie: Cookie): Promise<string | undefined> => {
  const res = await fetch("https://accounts.ea.com/connect/auth?client_id=GLACIER_COMP_APP&locale=en_US&redirect_uri=https%3A%2F%2Fportal.battlefield.com%2Fbf6&response_type=code&state=https%3A%2F%2Fportal.battlefield.com%2Fbf6", {
    method: "get",
    headers: { "Cookie": `sid=${cookie.sid}; remid=${cookie.remid};` },
    redirect: "manual"
  });
  const redirect = res.headers.get("location");
  if (redirect == null) {
    return undefined;
  }
  const url: URL = new URL(redirect);
  const query = new URLSearchParams(url.searchParams);
  return query.get("code") || undefined
}

export const getWebAccessToken = async (accessToken: string): Promise<AuthenticationResponse> => {
  const channel = createChannel("https://santiago-prod-wgw-envoy.ops.dice.se");
  const client = createClientFactory().use((call, options) =>
    call.next(call.request, {
      ...options,
      metadata: Metadata(options.metadata)
        .set('x-dice-tenancy', 'prod_default-prod_default-santiago-common')
        .set('x-grpc-web', '1')
    }),
  ).create(WebAuthenticationDefinition, channel);

  return await client.viaAuthCode({ authCode: accessToken, platform: Platform.PC, redirectUri: { stringValue: "https://portal.battlefield.com/bf6" } });
}