export const loginMock: any = {
  user: {
    id: 2,
    user_name: 'api',
    last_name: 'api',
    first_name: 'api',
    middle_name: null,
    full_name: 'Api Api',
    short_name: 'Api A.',
    email: null,
    system: false,
    company_id: 1,
  },
  access_token: {
    value:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTA4NjYxNDQsIm5iZiI6MTU5MDg2NjE0NCwianRpIjoiYjJiYmQ5MmUtOTY3NC00ZjU0LWFiMzUtMjI4MmE3Njg3NmM2IiwiZXhwIjoxNTkwODY3MDQ0LCJpZGVudGl0eSI6eyJ1c2VyX2lkIjoyLCJjb21wYW55X2lkIjoxfSwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ._x2CWFRbuWvmzgHt6l31N871_oJRw4ygfYPyqKLv5Fg',
    expired_at: '2020-05-30 19:30:44',
  },
  refresh_token: {
    value:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTA4NjYxNDQsIm5iZiI6MTU5MDg2NjE0NCwianRpIjoiMmYzOTE0ZDktMmI4My00NmQzLTg5YjYtNDc5ZmY0ZTg2MzYyIiwiZXhwIjoxNTkwOTUyNTQ0LCJpZGVudGl0eSI6eyJ1c2VyX2lkIjoyLCJjb21wYW55X2lkIjoxfSwidHlwZSI6InJlZnJlc2gifQ.N1b6rDeU-cohigzkLXhbemt2GjWzoVjUj0VRFaxJWA8',
    expired_at: '2020-05-31 19:15:44',
  },
};

export const refreshTokenMock: any = {
  user: {
    id: 2,
    user_name: 'api',
    last_name: 'api',
    first_name: 'api',
    middle_name: null,
    full_name: 'Api Api',
    short_name: 'Api A.',
    email: null,
    system: false,
    company_id: 1,
  },
  access_token: {
    value:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTA4NjcyNDMsIm5iZiI6MTU5MDg2NzI0MywianRpIjoiNzE1MzIwZGQtYTgwNy00NGNhLTliNWEtZDdlZDkzN2MwNjg3IiwiZXhwIjoxNTkwODY4MTQzLCJpZGVudGl0eSI6eyJ1c2VyX2lkIjoyLCJjb21wYW55X2lkIjoxfSwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ.cPduVTNaqEoH7T78YwqmuNQJLxJDsHNi3kfwFhNbgEU',
    expired_at: '2020-05-30 19:49:03',
  },
};

export const checkTokenMock = {
  payload: {
    user_id: 2,
    company_id: 1,
  },
};
