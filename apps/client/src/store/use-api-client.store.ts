import { create } from 'zustand';
import { GraphQLClient } from 'graphql-request';
import { combine } from 'zustand/middleware';

const GQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? 'http://localhost:3100/graphql';

export type APIClientStoreState = {
  accessToken: string | undefined;
  gqlClient: GraphQLClient;
};

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const gqlClient = new GraphQLClient(GQL_URL, { headers });
const initialState: APIClientStoreState = {
  accessToken: undefined,
  gqlClient,
};

export const useAPIClientStore = create(
  combine(initialState, (set) => ({
    setAccessToken: (accessToken: string) =>
      set((state) => ({
        accessToken,
        gqlClient: state.gqlClient.setHeader('authorization', accessToken),
      })),
  })),
);
