'use client';
import React from 'react';
import { TextInput, Button, Checkbox, ErrorMessage } from '@comosus/ui';
import { Icon } from '@iconify/react';
import { useRegisterForm } from './use-register-form.hook';
import { Controller } from 'react-hook-form';

export function RegisterForm() {
  const { control, onRegister, isRegistering, registerError } =
    useRegisterForm();

  return (
    <form onSubmit={onRegister} className="flex flex-col gap-7">
      <h2 className="text-h3 font-semibold">{"Let's get you registered!"}</h2>
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
      <Controller
        control={control}
        name="acceptTerms"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Checkbox value={value} onChange={onChange} error={error?.message}>
            By checking this box, you are agreeing to give us your detail and
            stuffs
          </Checkbox>
        )}
      />
      <Button isLoading={isRegistering}>Register</Button>
      {registerError && <ErrorMessage>{registerError}</ErrorMessage>}
    </form>
  );
}
