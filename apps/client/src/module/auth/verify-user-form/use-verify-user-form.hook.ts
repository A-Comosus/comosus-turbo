'use client';
import { useVerifyUserService } from '@src/service';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function useVerifyUserForm() {
  const searchParams = useSearchParams();

  const { verifyUser, isVerifying, verificationError } = useVerifyUserService({
    onSuccess: () => {
      alert('You are verified!');
    },
    onError: () => {
      alert('You are not verified!');
    },
  });

  useEffect(() => {
    const token = searchParams.get('token');
    if (token !== null) {
      verifyUser({
        input: {
          token,
        },
      });
    }
  }, []);

  return { isVerifying, verificationError };
}
