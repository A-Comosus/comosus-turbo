import { useForm } from 'react-hook-form';
import { resolver } from './use-register-form.schema';
import { RegisterInput } from '@src/.generated/graphql.api';
import { useRegisterService } from '@src/service';

export function useRegisterForm() {
  const { register, isRegistering, registerError } = useRegisterService({
    onSuccess: () => alert('You are registered!'),
    onError: () => alert('noooooooooooooooooooooooooooooooo'),
  });

  const defaultValues: RegisterInput = {
    email: '',
    password: '',
    acceptTerms: false,
  };
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver,
  });

  const onRegister = handleSubmit((data) => {
    register({ input: data });
  });

  return { control, onRegister, isRegistering, registerError };
}
