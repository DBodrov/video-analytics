import { FETCH_TIMEOUT } from './api-constants';
import { NetworkError } from './api-types';

export const abortableFetch: Window['fetch'] = (input, init?) => {
  const controller = new AbortController();
  const signal = controller.signal;
  setTimeout(controller.abort.bind(controller), FETCH_TIMEOUT);
  const newParams = { ...init, signal };
  return fetch(input, newParams)
    .then(data => Promise.resolve(data))
    .catch(err => {
      (err as NetworkError).request = getRequestInfo(input, init);
      throw err;
    });
};

function getRequestInfo(
  input: RequestInfo,
  init?: RequestInit,
): NetworkError['request'] {
  return {
    url: isRequest(input) ? input.url : input,
    method: isRequest(input) ? input.method : init?.method,
  };
}

function isRequest(url: RequestInfo): url is Request {
  return typeof url === 'object';
}
