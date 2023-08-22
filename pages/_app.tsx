import type { AppProps } from 'next/app';

import { ErrorBoundary } from '@/components/error';
import '@/styles/globals.scss';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../src/mocks');
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
