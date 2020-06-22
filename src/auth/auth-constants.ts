import { LoginFormData } from './auth-types';

export const loginFields: Record<keyof LoginFormData, keyof LoginFormData> = {
  userName: 'userName',
  password: 'password',
};

export const TIMEZONE_OFFSET_HOURS = new Date().getTimezoneOffset() / 60;
