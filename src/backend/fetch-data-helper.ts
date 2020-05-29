import { to } from '@/common/await-to-js';
import { action } from 'mobx';
import { FETCH_TIMEOUT } from './api-constants';
import { showRequestError } from './api-middlewares';
import { NetworkError } from './api-types';

export interface DataLoading<Data extends any> {
  loading: boolean;
  data: Data | undefined;
}

interface Params<Data extends any, FnParams extends any[] = []> {
  fetchFn: (...params: FnParams) => Promise<Data>;
  onSuccess?(data: Data): void | Promise<void>;
}

export function makeFetchData<Data extends any, FnParams extends any[] = []>(
  store: DataLoading<Data>,
  { fetchFn, onSuccess }: Params<Data, FnParams>,
) {
  const setLoading = action((value: boolean) => {
    store.loading = value;
  });

  const setData = action((value: Data) => {
    store.data = value;
  });

  return async (...params: FnParams) => {
    setLoading(true);
    const [data, err] = await to(fetchFn(...params));
    if (err) {
      showError(err);
    }
    if (data) {
      setData(data);
      onSuccess?.(data);
    }
    setLoading(false);
  };
}

function showError(err: Error | Response) {
  if (isResponse(err)) {
    // ошибку покажет middleware
    return;
  }
  const errText = String(err);
  showRequestError({
    url: isNetworkError(err) ? err.request.url : undefined,
    method: isNetworkError(err) ? err.request.method : undefined,
    message: errText.includes('AbortError')
      ? `Timeout of ${FETCH_TIMEOUT / 1000}s exceeded `
      : errText,
  });
}

function isResponse(err: Error | Response): err is Response {
  const field: keyof Response = 'status';
  return field in err;
}

function isNetworkError(err: Error | NetworkError): err is NetworkError {
  const field: keyof NetworkError = 'request';
  return field in err;
}
