import { useReducer, useCallback, useEffect } from 'react';
import { useFetch } from '@/utils';
import {
  LoginPostResponse201FromJSON,
  LoginPostRequestToJSON,
  LoginPostError,
  LoginPostResponse201,
  LoginPostErrorFromJSON,
  TokenPostResponse201FromJSON,
} from '@/backend/auth/models';
import {
  LoginFormData,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_INTERVAL,
  REFRESH_TOKEN_KEY,
  USERNAME_KEY,
} from './types';

type TAuthState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data?: LoginPostResponse201;
  accessToken?: string;
  refreshToken?: string;
  error?: LoginPostError;
};

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY)?.trim() ?? '';
const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY)?.trim() ?? '';

const setAccessToken = (token = '') => localStorage.setItem(ACCESS_TOKEN_KEY, token);

const setRefreshToken = (token = '') => localStorage.setItem(REFRESH_TOKEN_KEY, token);

const authReducer = (s: TAuthState, a: TAuthState): TAuthState => ({ ...s, ...a });
const initialAuthState: TAuthState = {
  status: 'idle',
  data: undefined,
  accessToken: getAccessToken(),
  refreshToken: getRefreshToken(),
  error: undefined,
};


const storeLoginData = (loginResponse: LoginPostResponse201) => {
  setAccessToken(loginResponse.accessToken.value);
  setRefreshToken(loginResponse.refreshToken.value);
  localStorage.setItem(USERNAME_KEY, loginResponse.user.firstName ?? '');
};

let interval: any;

export function useAuthClient() {
  const [{ status, data, error, accessToken, refreshToken }, setAuthState] = useReducer(authReducer, initialAuthState);
  const fetchClient = useFetch();

  const logout = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    setAuthState({status: 'resolved', accessToken: '', refreshToken: ''});
  }, []);

  const fetchRefreshToken = useCallback(() => {
    console.log('fetchRefresh token');
    if (!refreshToken) {
      window.clearInterval(interval);
      return;
    }
    fetchClient('/api/auth/token', { headers: { Authorization: `Bearer ${refreshToken}` }, body: {} }).then(
      (response) => {
        const token = TokenPostResponse201FromJSON(response);
        console.log('refresh token', token.accessToken.value);
        setAccessToken(token.accessToken.value);
        return response;
      },
      (error) => {
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        window.clearInterval(interval);
        return error;
      },
    );
  }, [fetchClient, refreshToken]);

  const checkToken = useCallback(() => {
    fetchClient('/api/auth/check-token', { headers: { Authorization: `Bearer ${accessToken}` } }).then(
      (response) => {
        setAuthState({ status: 'resolved' });
        return response;
      },
      (error) => {
        logout();
        return error;
      },
    );
  }, [accessToken, fetchClient, logout]);

  const run = useCallback(() => {
    if (accessToken) {
      // setAuthState({status: 'resolved', data: {accessToken: {value: accessToken()}}})
      checkToken();
    }
    interval = window.setInterval(() => {
      fetchRefreshToken();
    }, REFRESH_TOKEN_INTERVAL);
  }, [accessToken, checkToken, fetchRefreshToken]);

  const login = useCallback(
    (loginData: LoginFormData) => {
      setAuthState({ status: 'pending' });
      fetchClient('/api/auth/login', {
        body: LoginPostRequestToJSON(loginData),
      }).then(
        (response: any) => {
          const loginResponse = LoginPostResponse201FromJSON(response);
          storeLoginData(loginResponse);
          setAuthState({
            status: 'resolved',
            data: loginResponse,
            accessToken: loginResponse.accessToken.value,
            refreshToken: loginResponse.refreshToken.value,
          });
          return response;
        },
        (error) => {
          const loginError = LoginPostErrorFromJSON(error);
          setAuthState({ status: 'rejected', error: loginError });
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
    isAuthorized: Boolean(accessToken),

    run,
    login,
    logout,
    data,
    accessToken,
    error,
  };
}
