import fetchMock from 'fetch-mock';
import { loginMock } from './mocks/auth-mocks';
import { statsMock } from './mocks/stats-mock';

fetchMock.post('end:/api/auth/login', loginMock);

fetchMock.get(
  'express:/api/va/companies/:companyId/events/inout/stats',
  statsMock,
);
