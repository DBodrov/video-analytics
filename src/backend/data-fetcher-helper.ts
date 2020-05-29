import { to } from '@/common/await-to-js';
import { notification } from 'antd';
import { action } from 'mobx';

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
    const [data, err] = await to(loadFn(...params));
    if (err) {
      // @ts-ignore
      const storeName = store.__proto__?.constructor?.name ?? 'при запросе';
      notification.error({
        message: `Ошибка ${storeName}`,
        description: String(err),
      });
    }
    if (data) {
      setData(data);
    }
    setLoading(false);
  };
}
