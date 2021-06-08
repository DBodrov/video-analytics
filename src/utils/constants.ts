export const TIMEZONE_OFFSET = Math.abs(new Date().getTimezoneOffset() / 60)
export const HOST = window.location.host;

export const ACCESS_TOKEN_KEY = 'VA-access-token';
export const REFRESH_TOKEN_KEY = 'VA-refresh-token';
export const USERNAME_KEY = 'VA-user-name';
export const REFRESH_TOKEN_INTERVAL = 5 * (1000 * 60);
