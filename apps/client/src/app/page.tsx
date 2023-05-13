'use client';
import { useState } from 'react';

import { Like } from '@src/component';
import { Button } from '@comosus/ui';

export default function Web() {
  const [state] = useState('Web');

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-4xl mb-4">{state}</h1>
      <Button className="mb-8 w-40">Beep</Button>

      <Like />
    </main>
  );
}
