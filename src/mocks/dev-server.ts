import {setupWorker} from 'msw';
import {handlers} from './handlers';

export const devServer = setupWorker(...handlers);
