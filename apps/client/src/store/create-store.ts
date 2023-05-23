import { StateCreator, create } from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

type Set<T extends object> = (
  partial: T | Partial<T> | ((state: T) => T | Partial<T>),
  replace?: boolean,
  actionType?: string,
) => void;

type Get<T extends object> = () => T;

export type StoreActions<State extends object, Action extends object> = (
  set: Set<State>,
  get: Get<State>,
) => Action;

export function createStore<
  TStoreState extends object,
  TStoreAction extends object,
>({
  name,
  initialState,
  actions,
}: {
  name: string;
  initialState: TStoreState;
  actions: StateCreator<TStoreState, any, any, TStoreAction>;
}) {
  return create(
    devtools(
      persist(combine<TStoreState, TStoreAction>(initialState, actions), {
        name,
      }),
    ),
  );
}
