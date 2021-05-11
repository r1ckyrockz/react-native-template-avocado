import React, { ReactNode, ReactNodeArray } from 'react';
import { ErrorBoundary as RNErrorBoundary } from 'react-error-boundary';

import { Error } from '../../screens';

type ErrorBoundaryProps = {
  children: ReactNode | ReactNodeArray;
};

export function ErrorBoundary({ children }: ErrorBoundaryProps): JSX.Element {
  return <RNErrorBoundary FallbackComponent={Error}>{children}</RNErrorBoundary>;
}
