export interface LoginFormData {
  userName: string;
  password: string;
}

export interface Tokens {
  accessToken?: string;
  refreshToken?: string;
}
