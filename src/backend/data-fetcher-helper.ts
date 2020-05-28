import { action } from 'mobx';
import { to } from '@/common/await-to-js';

export interface DataLoading<Data extends any> {
  loading: boolean;
  data: Data | undefined;
}

export function makeFetchData<Data extends any, Params extends any[] = []>(
  store: DataLoading<Data>,
  loadFn: (...params: Params) => Promise<Data>,
) {
  const setLoading = action((value: boolean) => {
    store.loading = value;
  });

  const setData = action((value: Data) => {
    store.data = value;
  });

  return async (...params: Params) => {
    setLoading(true);
    const [data] = await to(loadFn(...params));
    if (data) {
      setData(data);
    }
    setLoading(false);
  };
}
