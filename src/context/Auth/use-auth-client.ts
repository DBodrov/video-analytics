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
  data?: LoginPostResponse201;
  companyId?: number;
  accessToken?: string;
  refreshToken?: string;
  error?: LoginPostError;
};

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY)?.trim() ?? '';
const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY)?.trim() ?? '';

const setAccessToken = (token = '') => localStorage.setItem(ACCESS_TOKEN_KEY, token);

const setRefreshToken = (token = '') => localStorage.setItem(REFRESH_TOKEN_KEY, token);

const authReducer = (s: TAuthState, a: Partial<TAuthState>): TAuthState => ({...s, ...a});
const initialAuthState: TAuthState = {
  status: 'idle',
  data: undefined,
  companyId: undefined,
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
  const [{status, companyId, data, error, accessToken, refreshToken}, setAuthState] = useReducer(
    authReducer,
    initialAuthState,
  );
  const fetchClient = useFetch();

  const logout = useCallback(() => {
    fetchClient('/api/auth/logout', {
      headers: {Authorization: `Bearer ${accessToken}`},
      body: {METHOD: 'DELETE'},
    }).then(
      response => {
        setAuthState({
          status: 'resolved',
          accessToken: '',
          refreshToken: '',
          companyId: undefined,
          data: undefined,
        });
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        return response;
      },
      error => {
        const logoutError = LogoutDeleteErrorFromJSON(error);

        if (logoutError.statusCode === 401) {
          setAuthState({
            status: 'rejected',
            accessToken: '',
            refreshToken: '',
            companyId: undefined,
            data: undefined,
            error: logoutError,
          });
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          localStorage.removeItem(REFRESH_TOKEN_KEY);
        } else setAuthState({status: 'rejected', error: logoutError});

        return error;
      },
    );
  }, [fetchClient, accessToken]);

  const fetchRefreshToken = useCallback(() => {
    if (!refreshToken) {
      window.clearInterval(interval);
      return;
    }
    fetchClient('/api/auth/token', {headers: {Authorization: `Bearer ${refreshToken}`}, body: {}}).then(
      response => {
        const token = TokenPostResponse201FromJSON(response);
        setAccessToken(token.accessToken.value);
        setAuthState({companyId: token.user.companyId});
        return response;
      },
      error => {
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        window.clearInterval(interval);
        logout();
        return error;
      },
    );
  }, [fetchClient, refreshToken, logout]);

  const checkToken = useCallback(() => {
    fetchClient('/api/auth/check-token', {headers: {Authorization: `Bearer ${accessToken}`}}).then(
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
  }, [accessToken, fetchClient, fetchRefreshToken]);

  const run = useCallback(() => {
    if (accessToken) {
      checkToken();
    }
    interval = window.setInterval(() => {
      fetchRefreshToken();
    }, REFRESH_TOKEN_INTERVAL);
  }, [accessToken, checkToken, fetchRefreshToken]);

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
            accessToken: loginResponse.accessToken.value,
            refreshToken: loginResponse.refreshToken.value,
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
    isAuthorized: Boolean(accessToken),

    run,
    login,
    logout,
    data,
    companyId: companyId,
    accessToken,
    error,
  };
}
