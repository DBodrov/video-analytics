import { FETCH_TIMEOUT } from './api-constants';
import { NetworkError } from './api-types';

export const abortableFetch: Window['fetch'] = (input, init?) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const timeout = setTimeout(() => {
    controller.abort();
  }, FETCH_TIMEOUT);
  const newParams = { ...init, signal };
  return fetch(input, newParams)
    .then(data => {
      clearTimeout(timeout);
      return Promise.resolve(data);
    })
    .catch(err => {
      clearTimeout(timeout);
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
