import { ApolloClient, from } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { HttpLink } from 'apollo-link-http';

import { authLink, authErrorLink } from './auth';

function createApolloClient(initialState, ctx, logout) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  const link = from([
    authLink,
    authErrorLink(logout),
    new HttpLink({
      uri: process.env.API, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
  ]);

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}

export default createApolloClient;
