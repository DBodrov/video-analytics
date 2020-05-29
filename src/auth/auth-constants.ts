import { LoginFormData } from './auth-types';

export const loginFields: Record<keyof LoginFormData, keyof LoginFormData> = {
  userName: 'userName',
  password: 'password',
};
