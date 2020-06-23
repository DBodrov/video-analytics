export const API_BASE_PATH: string = '';

export const FETCH_TIMEOUT =
  process.env.NODE_ENV === 'development' ? 3000 : 10000;
