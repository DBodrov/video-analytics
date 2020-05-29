import { DEV_SERVER_ADDRESS } from '@/../config/dev-server';

export const API_BASE_PATH =
  process.env.NODE_ENV === 'development' ? DEV_SERVER_ADDRESS : '';

export const FETCH_TIMEOUT =
  process.env.NODE_ENV === 'development' ? 3000 : 10000;
