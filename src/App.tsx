import React from 'react';
import { useAuth } from '@/context/Auth';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

export function App() {
  const { isAuthorized } = useAuth();
  return (
    <React.Suspense fallback={<h3>Loading lazy...</h3>}>
      {isAuthorized ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}
