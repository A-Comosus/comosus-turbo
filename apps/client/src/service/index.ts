export { useRegisterService } from './auth/use-register-service.hook';
export { useLoginService } from './auth/use-login-service.hook';
export { useVerifyUserService } from './auth/use-verify-user.hook';
export { QueryClientContainer } from './query-client.provider';

export type ServiceHook<TResponse, TError> = {
  onSuccess?: (response: TResponse) => void;
  onError?: (error: TError) => void;
};
