import { LoginInput } from '../../../.generated/graphql.api';
import { useLoginService } from '../../../service';
import { useForm } from 'react-hook-form';
import { resolver } from './login-form.schema';

export function useLoginForm() {
  const { login, isLoggingIn, loginError } = useLoginService({
    onSuccess: (data) => {
      alert(`Yeaaah, logged in! ${data.data.accessToken}`);
    },
    onError: (error) => {
      alert(`Nooooooo, not logged in! ${error.message}`);
    },
  });

  const defaultValues: LoginInput = {
    email: '',
    password: '',
  };

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver,
  });

  const onLogin = handleSubmit((data) => {
    login({ input: data });
  });

  return { control, onLogin, isLoggingIn, loginError };
}
