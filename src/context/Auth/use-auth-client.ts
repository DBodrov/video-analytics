import {useReducer, useCallback, useEffect} from 'react';
import {useFetch, ACCESS_TOKEN_KEY, REFRESH_TOKEN_INTERVAL, REFRESH_TOKEN_KEY, USERNAME_KEY} from '@/utils';
import {
  LoginPostResponse201FromJSON,
  LoginPostRequestToJSON,
  LoginPostError,
  LoginPostResponse201,
  LoginPostErrorFromJSON,
  TokenPostResponse201FromJSON,
  CheckTokenResponse200FromJSON,
  LogoutDeleteErrorFromJSON,
} from '@/backend/auth/models';
import {LoginFormData} from './types';

type TAuthState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  user_name?: string;
  data?: LoginPostResponse201;
  companyId?: number;
  error?: LoginPostError;
  isAuthorized: boolean;
};

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY)?.trim() ?? '';
const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY)?.trim() ?? '';

const setAccessToken = (token = '') => localStorage.setItem(ACCESS_TOKEN_KEY, token);

const setRefreshToken = (token = '') => localStorage.setItem(REFRESH_TOKEN_KEY, token);

const authReducer = (s: TAuthState, a: Partial<TAuthState>): TAuthState => ({...s, ...a});
const initialAuthState: TAuthState = {
  status: 'idle',
  user_name: undefined,
  data: undefined,
  companyId: undefined,
  error: undefined,
  isAuthorized: false,
};

const storeLoginData = (loginResponse: LoginPostResponse201) => {
  setAccessToken(loginResponse.accessToken.value);
  setRefreshToken(loginResponse.refreshToken.value);
  localStorage.setItem(USERNAME_KEY, loginResponse.user.user_name ?? '');
};

let interval: any;

export function useAuthClient() {
  const [{status, companyId, data, error, user_name, isAuthorized}, setAuthState] = useReducer(
    authReducer,
    initialAuthState,
  );
  const fetchClient = useFetch();

  const logout = useCallback(() => {
    fetchClient('/api/auth/logout', {
      headers: {Authorization: `Bearer ${getAccessToken()}`},
      body: {METHOD: 'DELETE'},
    }).then(
      response => {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        window.clearInterval(interval);
        setAuthState({
          status: 'resolved',
          companyId: undefined,
          data: undefined,
          isAuthorized: false,
        });
        return response;
      },
      error => {
        const logoutError = LogoutDeleteErrorFromJSON(error);
        window.clearInterval(interval);
        if (logoutError.statusCode === 401) {
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          localStorage.removeItem(REFRESH_TOKEN_KEY);
          setAuthState({
            status: 'rejected',
            companyId: undefined,
            data: undefined,
            error: logoutError,
            isAuthorized: false,
          });
        } else setAuthState({status: 'rejected', error: logoutError, isAuthorized: false});
        return error;
      },
    );
  }, [fetchClient]);

  const fetchRefreshToken = useCallback(() => {
    if (!getRefreshToken()) {
      logout();
      return;
    }
    fetchClient('/api/auth/token', {headers: {Authorization: `Bearer ${getRefreshToken()}`}, body: {}}).then(
      response => {
        const token = TokenPostResponse201FromJSON(response);
        setAccessToken(token.accessToken.value);
        return response;
      },
      error => {
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        logout();
        return error;
      },
    );
  }, [fetchClient, logout]);

  const checkToken = useCallback(() => {
    fetchClient('/api/auth/check-token', {headers: {Authorization: `Bearer ${getAccessToken()}`}}).then(
      response => {
        const tokenData = CheckTokenResponse200FromJSON(response);
        setAuthState({status: 'resolved', companyId: tokenData.payload.companyId});
        return response;
      },
      error => {
        fetchRefreshToken();
        return error;
      },
    );
  }, [fetchClient, fetchRefreshToken]);

  const run = useCallback(() => {
    if (getAccessToken()) {
      checkToken();
    }
    interval = window.setInterval(() => {
      fetchRefreshToken();
    }, REFRESH_TOKEN_INTERVAL);
  }, [checkToken, fetchRefreshToken]);

  const login = useCallback(
    (loginData: LoginFormData) => {
      setAuthState({status: 'pending'});
      fetchClient('/api/auth/login', {
        body: LoginPostRequestToJSON(loginData),
      }).then(
        (response: any) => {
          const loginResponse = LoginPostResponse201FromJSON(response);
          storeLoginData(loginResponse);
          setAuthState({
            status: 'resolved',
            companyId: loginResponse.user.companyId,
            data: loginResponse,
            user_name: loginResponse.user.user_name,
            isAuthorized: true,
          });
          return response;
        },
        error => {
          const loginError = LoginPostErrorFromJSON(error);
          setAuthState({status: 'rejected', error: loginError});
          return error;
        },
      );
    },
    [fetchClient],
  );

  useEffect(() => {
    return () => window.clearInterval(interval);
  }, []);

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',
    isAuthorized: isAuthorized,

    run,
    login,
    logout,
    data,
    user_name: user_name,
    companyId: companyId,
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken(),
    error,
  };
}
