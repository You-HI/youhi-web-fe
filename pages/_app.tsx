import { AppContext } from 'next/app';

import { ErrorBoundary } from '@/components/error';
import JotaiProvider from '@/components/provider/JotaiProvider';
import { globalAtom } from '@/stores/globalStore';
import { CustomAppProps } from '@/types/store';

import '@/styles/globals.scss';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../src/mocks');
}

export default function App({ Component, pageProps, globalStoreProps }: CustomAppProps) {
  return (
    <ErrorBoundary>
      <JotaiProvider initialValues={[[globalAtom, globalStoreProps]]}>
        <Component {...pageProps} />
      </JotaiProvider>
    </ErrorBoundary>
  );
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return {
    pageProps,
    globalStoreProps: {
      test: true,
    },
  };
};
