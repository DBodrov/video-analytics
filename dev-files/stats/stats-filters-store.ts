import { DropdownFilterStore } from '@/common/components/dropdown/dropdown-filter-store';
import { DropdownFilterItem } from '@/common/components/dropdown/dropdown-types';
import { uniq } from '@/common/utils/uniq';
import { StatsStore } from './stats-store';

interface GetFilterItemsParams {
  getIds(): number[];
  getItem(id: number): { name: string } | undefined;
}

function getFilterItems({
  getIds,
  getItem,
}: GetFilterItemsParams): DropdownFilterItem[] {
  const ids = uniq(getIds());
  return ids.map(id => ({
    key: String(id),
    title: getItem(id)?.name ?? `Id ${id}`,
  }));
}

export class StatsFiltersStore {
  constructor(private readonly store: StatsStore) {}

  private getLocationFilterItems = (): DropdownFilterItem[] =>
    getFilterItems({
      getIds: () =>
        this.store.dataStats?.stats.map(({ location }) => location.id) ?? [],
      getItem: this.store.locations.getItem,
    });

  private getSensorsFilterItems = (): DropdownFilterItem[] =>
    getFilterItems({
      getIds: () =>
        this.store.dataStats?.stats.map(({ sensor }) => sensor.id) ?? [],
      getItem: this.store.sensors.getItem,
    });

  private getCategoriesFilterItems = (): DropdownFilterItem[] =>
    getFilterItems({
      getIds: () =>
        this.store.dataStats?.stats.map(
          statsItem => statsItem.trackedObjectCategory.id,
        ) ?? [],
      getItem: this.store.tocs.getItem,
    });

  location = new DropdownFilterStore({
    title: 'Площадки',
    getItems: this.getLocationFilterItems,
  });

  sensor = new DropdownFilterStore({
    title: 'Камеры',
    getItems: this.getSensorsFilterItems,
  });

  category = new DropdownFilterStore({
    title: 'Категория ТС',
    getItems: this.getCategoriesFilterItems,
  });
}
