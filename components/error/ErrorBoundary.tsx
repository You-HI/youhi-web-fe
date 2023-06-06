import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import CommonFallback from './CommonErrorFallback';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const Fallback = () => {
  // TODO: 추후 fallback이 많아질 경우 여기서 분기 처리
  return <CommonFallback />;
};

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  return <ReactErrorBoundary FallbackComponent={Fallback}>{children}</ReactErrorBoundary>;
};

export default ErrorBoundary;
