import { Navbar } from '@src/component';

import '@comosus/ui/styles.css';
import '@src/styles/globals.css';
import { QueryClientContainer } from '@src/service';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-neutral-50">
        <QueryClientContainer>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-center">
            {children}
          </main>
        </QueryClientContainer>
      </body>
    </html>
  );
}
