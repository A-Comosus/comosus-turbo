import { AppProps } from 'next/app';

import '@comosus/ui/styles.css';
import '@src/styles/globals.css';

export default function Web({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
