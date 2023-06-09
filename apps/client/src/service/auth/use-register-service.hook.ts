'use client';
import { RegisterSuccess } from '@src/.generated/graphql.api';
import { ResponseError } from '@src/.generated/graphql.api';
import { useRegisterMutation } from '@src/.generated/graphql.api';
import { useAPIClientStore } from '@src/store';
import { useState } from 'react';
import { ServiceHook } from '..';

export function useRegisterService(
  action?: ServiceHook<RegisterSuccess, ResponseError>,
) {
  const [registerError, setRegisterError] = useState<string | null>(null);
  const { gqlClient, setAccessToken } = useAPIClientStore();

  const { mutate: register, isLoading: isRegistering } = useRegisterMutation(
    gqlClient,
    {
      onSuccess: ({ register }) => {
        switch (register.__typename) {
          case 'RegisterSuccess':
            setAccessToken(register.data.accessToken);
            !!action?.onSuccess && action.onSuccess(register);
            return;

          case 'ResponseError':
            setRegisterError(register.message);
            !!action?.onError && action.onError(register);
            return;
        }
      },
    },
  );

  return { register, isRegistering, registerError };
}
