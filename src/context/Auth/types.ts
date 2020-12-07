export interface LoginFormData {
  userName: string;
  password: string;
}

export interface Tokens {
  accessToken?: string;
  refreshToken?: string;
}

export interface IAuthContext {
  isAuthorized?: boolean;
  login: (loginData: LoginFormData) => void;
  accessToken?: string;
  companyId?: number;
  authHeader?: {Authorization: string};
}

export const ACCESS_TOKEN_KEY = 'VA-access-token';
export const REFRESH_TOKEN_KEY = 'VA-refresh-token';
export const USERNAME_KEY = 'VA-user-name';
export const REFRESH_TOKEN_INTERVAL = 10 * (1000 * 60);
