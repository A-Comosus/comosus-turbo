'use client';
import { useAPIClientStore } from '@src/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

export function QueryClientContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useAPIClientStore((state) => state.queryClient);
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
