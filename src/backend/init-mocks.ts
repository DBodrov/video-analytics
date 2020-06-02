import fetchMock from 'fetch-mock';
import { loginMock } from './mocks/auth-mocks';
import { latestMock } from './mocks/latest-mock';
import { statsMock } from './mocks/stats-mock';
import { tocsMock } from './mocks/tocs-mock';

fetchMock.post('end:/api/auth/login', loginMock);

fetchMock.get('end:/api/va/tocs', tocsMock);

fetchMock.get(
  'express:/api/va/companies/:companyId/events/inout/stats',
  statsMock,
);

fetchMock.get(
  'express:/api/va/companies/:companyId/events/inout/latest',
  latestMock,
);
