import { Like } from '@src/component';
import { Button } from '@comosus/ui';

export default function Web() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl">A-Comosus</h1>
      <Button className="mb-8 w-40">Beep</Button>

      <Like />
    </main>
  );
}
