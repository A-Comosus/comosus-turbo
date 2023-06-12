'use client';
import {
  ResponseSuccessWithoutData,
  ResponseError,
} from '../../.generated/graphql.api';
import { ServiceHook } from '..';
import { useVerifyUserMutation } from '../../.generated/graphql.api';
import { useAPIClientStore } from '../../store';
import { useState } from 'react';

export function useVerifyUserService(
  action?: ServiceHook<ResponseSuccessWithoutData, ResponseError>,
) {
  const [verificationError, setVerificationError] = useState<string | null>(
    null,
  );
  const gqlClient = useAPIClientStore((state) => state.gqlClient);

  const { mutate: verifyUser, isLoading: isVerifying } = useVerifyUserMutation(
    gqlClient,
    {
      onSuccess: ({ verifyUser }) => {
        switch (verifyUser.__typename) {
          case 'ResponseSuccessWithoutData':
            !!action?.onSuccess && action.onSuccess(verifyUser);
            return;

          case 'ResponseError':
            setVerificationError(verifyUser.message);
            !!action?.onError && action.onError(verifyUser);
            return;
        }
      },
    },
  );

  return { verifyUser, isVerifying, verificationError };
}
