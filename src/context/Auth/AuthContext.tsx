import React, { useEffect, createContext, useContext, useMemo } from 'react';
import { useAuthClient } from './use-auth-client';
import {IAuthContext} from './types';



const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthProvider({ children }: React.Props<{}>) {
  const { run, login, isAuthorized, logout, isSuccess, isError, isIdle, isLoading, accessToken } = useAuthClient();

  useEffect(() => {
    run();
  }, [run])

  const contextValue = useMemo<IAuthContext>(() => ({ isAuthorized, login, accessToken, companyId: 1 }), [accessToken, isAuthorized, login]);

  if (isLoading) return <span>Authentication...</span>

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
