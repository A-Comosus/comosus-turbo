export * from './auth/use-register-service.hook';
export * from './auth/use-login-service.hook';
export { QueryClientContainer } from './query-client.provider';

export type ServiceHook<TResponse, TError> = {
  onSuccess?: (response: TResponse) => void;
  onError?: (error: TError) => void;
};
