/* eslint-disable @typescript-eslint/ban-types */
import { ComponentType, ReactNode } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

const withErrorBoundary = <P extends {}>(WrappedComponent: ComponentType<P>) => {
  return (props: P): ReactNode => (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
};

export default withErrorBoundary;
