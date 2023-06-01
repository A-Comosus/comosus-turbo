import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
};

export type App = {
  __typename?: 'App';
  status: Scalars['String'];
};

export type AppResponse = AppResponseSuccess | ResponseError;

export type AppResponseSuccess = {
  __typename?: 'AppResponseSuccess';
  data: App;
  message: Scalars['String'];
  result: Scalars['String'];
};

export type Authenticated = {
  __typename?: 'Authenticated';
  accessToken: Scalars['String'];
  user: UserDto;
};

export type DeleteSuccess = {
  __typename?: 'DeleteSuccess';
  data: UserDto;
  message: Scalars['String'];
  result: Scalars['String'];
};

export type DeleteUserDto = DeleteSuccess | ResponseError;

export type DeleteUserInput = {
  id: Scalars['String'];
};

export type FindAllUserDto = FindAllUserSuccess | ResponseError;

export type FindAllUserSuccess = {
  __typename?: 'FindAllUserSuccess';
  data: Array<UserDto>;
  message: Scalars['String'];
  result: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = LoginSuccess | ResponseError;

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  data: Authenticated;
  message: Scalars['String'];
  result: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: DeleteUserDto;
  login: LoginResponse;
  register: RegisterResponse;
  restartVerification: StartVerificationResponse;
  verifyUser: VerificationResponse;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRestartVerificationArgs = {
  input: StartVerificationInput;
};


export type MutationVerifyUserArgs = {
  input: VerifyUserInput;
};

export type Query = {
  __typename?: 'Query';
  getAppStatus: AppResponse;
  users: FindAllUserDto;
};

export type RegisterInput = {
  acceptTerms: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterResponse = RegisterSuccess | ResponseError;

export type RegisterSuccess = {
  __typename?: 'RegisterSuccess';
  data: Authenticated;
  message: Scalars['String'];
  result: Scalars['String'];
};

export type ResponseError = {
  __typename?: 'ResponseError';
  message: Scalars['String'];
  result: Scalars['String'];
};

export type ResponseSuccessWithoutData = {
  __typename?: 'ResponseSuccessWithoutData';
  message: Scalars['String'];
  result: Scalars['String'];
};

export type StartVerificationInput = {
  email: Scalars['String'];
};

export type StartVerificationResponse = ResponseError | ResponseSuccessWithoutData;

export type UserDto = {
  __typename?: 'UserDTO';
  acceptTerms: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['BigInt'];
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type VerificationResponse = ResponseError | ResponseSuccessWithoutData;

export type VerifyUserInput = {
  token: Scalars['String'];
};

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename: 'RegisterSuccess', result: string, message: string, data: { __typename?: 'Authenticated', accessToken: string, user: { __typename?: 'UserDTO', id: any, email: string, username?: string | null, status: string, acceptTerms: boolean, createdAt: any, updatedAt: any } } } | { __typename: 'ResponseError', result: string, message: string } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename: 'LoginSuccess', result: string, message: string, data: { __typename?: 'Authenticated', accessToken: string, user: { __typename?: 'UserDTO', id: any, email: string, username?: string | null, status: string, acceptTerms: boolean, createdAt: any, updatedAt: any } } } | { __typename: 'ResponseError', result: string, message: string } };

export type RestartVerificationMutationVariables = Exact<{
  input: StartVerificationInput;
}>;


export type RestartVerificationMutation = { __typename?: 'Mutation', restartVerification: { __typename: 'ResponseError', result: string, message: string } | { __typename: 'ResponseSuccessWithoutData', result: string, message: string } };

export type VerifyUserMutationVariables = Exact<{
  input: VerifyUserInput;
}>;


export type VerifyUserMutation = { __typename?: 'Mutation', verifyUser: { __typename: 'ResponseError', result: string, message: string } | { __typename: 'ResponseSuccessWithoutData', result: string, message: string } };


export const RegisterDocument = `
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    __typename
    ... on RegisterSuccess {
      result
      message
      data {
        accessToken
        user {
          id
          email
          username
          status
          acceptTerms
          createdAt
          updatedAt
        }
      }
    }
    ... on ResponseError {
      result
      message
    }
  }
}
    `;
export const useRegisterMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
      ['Register'],
      (variables?: RegisterMutationVariables) => fetcher<RegisterMutation, RegisterMutationVariables>(client, RegisterDocument, variables, headers)(),
      options
    );
export const LoginDocument = `
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    __typename
    ... on LoginSuccess {
      result
      message
      data {
        accessToken
        user {
          id
          email
          username
          status
          acceptTerms
          createdAt
          updatedAt
        }
      }
    }
    ... on ResponseError {
      result
      message
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );
export const RestartVerificationDocument = `
    mutation RestartVerification($input: StartVerificationInput!) {
  restartVerification(input: $input) {
    __typename
    ... on ResponseSuccessWithoutData {
      result
      message
    }
    ... on ResponseError {
      result
      message
    }
  }
}
    `;
export const useRestartVerificationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RestartVerificationMutation, TError, RestartVerificationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RestartVerificationMutation, TError, RestartVerificationMutationVariables, TContext>(
      ['RestartVerification'],
      (variables?: RestartVerificationMutationVariables) => fetcher<RestartVerificationMutation, RestartVerificationMutationVariables>(client, RestartVerificationDocument, variables, headers)(),
      options
    );
export const VerifyUserDocument = `
    mutation VerifyUser($input: VerifyUserInput!) {
  verifyUser(input: $input) {
    __typename
    ... on ResponseSuccessWithoutData {
      result
      message
    }
    ... on ResponseError {
      result
      message
    }
  }
}
    `;
export const useVerifyUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<VerifyUserMutation, TError, VerifyUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<VerifyUserMutation, TError, VerifyUserMutationVariables, TContext>(
      ['VerifyUser'],
      (variables?: VerifyUserMutationVariables) => fetcher<VerifyUserMutation, VerifyUserMutationVariables>(client, VerifyUserDocument, variables, headers)(),
      options
    );