import {rest} from 'msw';
//import {refreshTokenMock, checkTokenMock, loginMock} from './auth-mocks';
//import {locationsMock, sensorsMock} from './company-mock';
import {refreshTokenMock, checkTokenMock, loginMock, logoutMock} from './auth-mocks';
import {locationsMock, sensorsMock} from './company-mock';
import {checkCategories, checks, statuses, incidentsRefs} from './refs-mocks';
import {events} from './events-mock';
import {incidentsMock} from './incidents-mocks';
import {eventsCounts} from './events-counts';
import {eventMock} from './event-details-mocks';
import {timeline} from './timeline-mock';
import {incidentDetailMock} from './incident-details-mocks';
import {sensorDetail, sensorStats} from './sensor-detail';
import {pipelineChecksMock, pipelinesMock} from './settings-mocks';
//import {sensorStats} from './sensors-stats';

const authHandlers = [
  rest.post('/api/auth/token', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(refreshTokenMock));
  }),

  rest.get('/api/auth/check-token', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(checkTokenMock));
  }),

  rest.post('/api/auth/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(loginMock));
  }),

  rest.delete('/api/auth/logout', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(logoutMock));
  })
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
  rest.get('/api/auth/refs/incidents', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(incidentsRefs));
  }),
];

const eventsHandlers = [
  rest.get('/api/va/companies/:companyId/events', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(events));
  }),
  rest.get('/api/va/companies/:companyId/incidents', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(incidentsMock));
  }),
  rest.get('/api/va/companies/:companyId/events/counts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(eventsCounts));
  }),
];

const eventDetailsHandlers = [
  rest.get('/api/va/companies/:companyId/timeline', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(timeline));
  }),

  rest.get('/api/va/companies/:companyId/events/:eventid', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(eventMock));
  }),

  rest.get('/api/va/companies/:companyId/incidents/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(incidentDetailMock));
  }),
];

const sensorDetailHandlers = [
  rest.get('/api/va/companies/:companyId/sensors/:sensorId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sensorDetail));
  }),
  rest.get('/api/va/companies/:companyId/sensors/:sensorId/stats', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sensorStats));
  }),
];

const settingsHandlers = [
  rest.get('/api/va/companies/:companyId/pipelines', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pipelinesMock));
  }),
  rest.get('/api/va/companies/:companyId/pipelines/:pipelineId/checks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pipelineChecksMock));
  }),

  rest.put('/api/va/companies/:companyId/pipelines/:pipelineId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),

]


export const handlers = [
  ...authHandlers,
  ...companyHandlers,
  ...refsHandlers,
  ...eventsHandlers,
  ...eventDetailsHandlers,
  ...sensorDetailHandlers,
  ...settingsHandlers,
];
