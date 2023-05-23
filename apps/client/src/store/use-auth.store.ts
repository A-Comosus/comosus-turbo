import { create } from 'zustand';
import { devtools, persist, combine } from 'zustand/middleware';
import { useRouter } from 'next/router';

export type AuthStoreState = {
  id: string | undefined;
  accessToken: string | undefined;
};

export enum AuthStore {
  Name = 'AuthStore',
  InitStore = 'InitStore',
  Logout = 'Logout',
}

const name = AuthStore.Name;
const initialState: AuthStoreState = {
  id: undefined,
  accessToken: undefined,
};

const useStore = create(
  devtools(
    persist(
      combine(initialState, (set) => ({
        init: (value: AuthStoreState) => set(value, false, 'AuthStore.Init'),
        logout: () => set(initialState, false, 'AuthStore.Logout'),
      })),
      { name },
    ),
  ),
);

export function useAuth() {
  const state = useStore();
  const router = useRouter();

  const logout = () => {
    state.logout();
    router.push('/');
  };

  return { ...state, logout };
}
