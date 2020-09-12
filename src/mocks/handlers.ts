import {rest} from 'msw';
import {refreshTokenMock, checkTokenMock, loginMock} from './auth-mocks';
import {locationsMock, sensorsMock} from './company-mock';
import {checkCategories, checks, statuses} from './refs-mocks';
import {events} from './events-mock';
import {eventMock, timelineMock} from './event-details-mocks';

const authHandlers = [
  rest.get('/api/auth/token', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(refreshTokenMock));
  }),

  rest.get('/api/auth/check-token', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(checkTokenMock));
  }),

  rest.post('/api/auth/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(loginMock));
  }),
];

const companyHandlers = [
  rest.get('/api/va/companies/:companyId/locations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(locationsMock));
  }),
  rest.get('/api/va/companies/:companyId/sensors', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sensorsMock));
  }),
];

const refsHandlers = [
  rest.get('/api/auth/refs/statuses', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(statuses));
  }),
  rest.get('/api/auth/refs/checks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(checks));
  }),
  rest.get('/api/auth/refs/check_categories', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(checkCategories));
  }),
];

const eventsHandlers = [
  rest.get('/api/va/companies/:companyId/events', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(events));
  }),
];

const eventDetailsHandlers = [
  rest.get('/api/va/companies/:companyId/events/:eventid', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(eventMock));
  }),

  rest.get('/api/va/companies/:companyId/events/timeline', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(timelineMock));
  }),
];

export const handlers = [
  ...authHandlers,
  ...companyHandlers,
  ...refsHandlers,
  ...eventsHandlers,
  ...eventDetailsHandlers,
];