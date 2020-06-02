import { to } from '@/common/utils/await-to-js';
import { action } from 'mobx';
import { FETCH_TIMEOUT } from './api-constants';
import { NetworkError } from './api-types';
import { showRequestError } from './show-request-error';

export interface ILoading {
  loading: boolean;
}

export interface DataAndLoading<Data extends any> extends ILoading {
  data: Data | undefined;
}

interface MakeFetchDataParams<Data extends any, Params extends any[] = []> {
  fetchFn: (...params: Params) => Promise<Data>;
  onSuccess?(data: Data): void | Promise<void>;
}

export function makeFetchData<Data extends any, Params extends any[]>(
  store: DataAndLoading<Data>,
  { fetchFn, onSuccess }: MakeFetchDataParams<Data, Params>,
) {
  const setData = action((value: Data) => {
    store.data = value;
  });

  return runWithLoading(store, async (...params: Params) => {
    const [data, err] = await to(fetchFn(...params));
    if (err) {
      showError(err);
    }
    if (data) {
      setData(data);
      onSuccess?.(data);
    }
  });
}

export async function fetchWithShowError<Data extends any>(
  promise: Promise<Data>,
): Promise<Data | undefined> {
  const [data, err] = await to(promise);
  if (err) {
    showError(err);
  }
  return data;
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

export function runWithLoading<FnParams extends any[]>(
  store: ILoading,
  fn: (...params: FnParams) => Promise<void>,
) {
  const setLoading = action((value: boolean) => {
    store.loading = value;
  });
  return async (...params: FnParams) => {
    setLoading(true);
    await fn(...params);
    setLoading(false);
  };
}
