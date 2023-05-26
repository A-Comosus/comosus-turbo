'use client';
import {
  LoginSuccess,
  ResponseError,
  useLoginMutation,
} from '@src/.generated/graphql.api';
import { useAPIClientStore } from '@src/store';
import { useState } from 'react';
import { ServiceHook } from '..';

export function useLoginService(
  action?: ServiceHook<LoginSuccess, ResponseError>,
) {
  const [loginError, setLoginError] = useState<string | null>(null);

  const gqlClient = useAPIClientStore((state) => state.gqlClient);

  const { mutate: login, isLoading: isLoggingIn } = useLoginMutation(
    gqlClient,
    {
      onSuccess: ({ login }) => {
        switch (login.__typename) {
          case 'LoginSuccess':
            // Redirect to dashboard or onboarding depending on user state
            !!action?.onSuccess && action.onSuccess(login);
            return;

          case 'ResponseError':
            setLoginError(login.message);
            !!action?.onError && action.onError(login);
            return;
        }
      },
    },
  );

  return { login, isLoggingIn, loginError };
}
