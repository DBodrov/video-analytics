import React, {useEffect, createContext, useContext, useMemo} from 'react';
import {useAuthClient, getAccessToken} from './use-auth-client';
import {IAuthContext} from './types';

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const {run, login, logout, isAuthorized, isLoading, companyId, user_name} = useAuthClient();

  useEffect(() => {
    run();
  }, [run]);

  const contextValue = useMemo<IAuthContext>(
    () => ({
      isAuthorized,
      login,
      logout,
      user_name,
      companyId,
      authHeader: {Authorization: `Bearer ${getAccessToken()}`},
    }),
    [companyId, isAuthorized, login, logout, user_name],
  );

  if (isLoading) return <span>Authentication...</span>;

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
