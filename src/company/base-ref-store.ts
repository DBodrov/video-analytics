import { DataAndLoading, makeFetchData } from '@/backend/fetch-data-helper';
import { computed, observable } from 'mobx';

interface BaseRefStoreParams<Data, ItemData extends { id: number }> {
  fetchFn(): Promise<Data>;
  getItems(data: Data): ItemData[];
}

export class BaseRefStore<Data, ItemData extends { id: number }>
  implements DataAndLoading<Data> {
  @observable
  loading: boolean = false;

  @observable.ref
  data: Data | undefined;

  constructor(private readonly params: BaseRefStoreParams<Data, ItemData>) {}

  @computed
  private get items(): Map<number, ItemData> {
    const { data } = this;
    const entries: Array<[number, ItemData]> = data
      ? this.params.getItems(data).map(item => [item.id, item])
      : [];
    return new Map(entries);
  }

  fetchData = makeFetchData(this, {
    fetchFn: this.params.fetchFn,
  });

  getItem = (id: number): ItemData | undefined => this.items.get(id);
}
