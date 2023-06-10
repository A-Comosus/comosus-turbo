'use client';
import React from 'react';
import { useVerifyUserForm } from './use-verify-user-form.hook';

export function VerifyUserForm() {
  const { isVerifying, verificationError } = useVerifyUserForm();

  return (
    <section className="flex flex-col gap-2">
      {isVerifying && <p>Is Verifying...</p>}
      {verificationError && <p>{verificationError}</p>}
    </section>
  );
}
