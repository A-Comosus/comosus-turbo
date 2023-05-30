'use client';

import { Controller } from 'react-hook-form';
import { useLoginForm } from './use-login-form.hook';
import { Button, ErrorMessage, TextInput } from '@comosus/ui';
import { Icon } from '@iconify/react';

export function LoginForm() {
  const { control, onLogin, isLoggingIn, loginError } = useLoginForm();

  return (
    <form onSubmit={onLogin} className="flex flex-col gap-7">
      <h2 className="text-h3 font-semibold">{"Let's get you logged in!"}</h2>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextInput
            value={value}
            onChange={onChange}
            error={error?.message}
            label={<Icon icon="eva:email-outline" />}
            placeholder="Your super duper email"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextInput
            type="password"
            value={value}
            onChange={onChange}
            error={error?.message}
            label={<Icon icon="ri:lock-password-line" />}
            placeholder="Your secret passphrase"
          />
        )}
      />
      <Button isLoading={isLoggingIn}>Login</Button>
      {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
    </form>
  );
}
