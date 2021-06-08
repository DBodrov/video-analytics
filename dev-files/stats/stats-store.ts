import { ILoading, runWithLoading } from '@/backend/fetch-data-helper';
import { LocationsStore } from '@/company/locations-store';
import { SensorsStore } from '@/company/sensors-store';
import { TocsStore } from '@/company/tocs-store';
import { action, computed, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { StatsFiltersStore } from './stats-filters-store';
import { StatsItemStore } from './stats-item-store';
import { StatsService } from './stats-service';
import {
  DataLatest,
  DataStats,
  ItemKey,
  ItemKeysData,
  LatestItemData,
  StatsItem,
  StatsItemData,
} from './stats-types';

@singleton()
export class StatsStore implements ILoading {
  @observable
  loading: boolean = false;

  @observable.ref
  dataStats: DataStats | undefined;

  @observable.ref
  private dataLatest: DataLatest | undefined;

  filters = new StatsFiltersStore(this);

  constructor(
    private readonly service: StatsService,
    readonly tocs: TocsStore,
    readonly sensors: SensorsStore,
    readonly locations: LocationsStore,
  ) {}

  @computed
  get latestDataMap(): Map<ItemKey, LatestItemData> {
    return new Map(
      this.dataLatest?.events.map(item => [this.constructKey(item), item]),
    );
  }

  @computed
  private get items(): StatsItem[] {
    return this.dataStats?.stats.map(this.convertStatsItem) ?? [];
  }

  @computed
  private get itemsFiltered(): StatsItem[] {
    return this.items.filter(this.filter);
  }

  @computed
  get itemsView(): StatsItem[] {
    return this.itemsFiltered;
  }

  private filter = (item: StatsItem): boolean => {
    const { location, sensor, category } = this.filters;
    return (
      (location.all || item.location.id === location.currentValue) &&
      (sensor.all || item.sensor.id === sensor.currentValue) &&
      (category.all || item.category.id === category.currentValue)
    );
  };

  private convertStatsItem = (itemData: StatsItemData): StatsItem => {
    return new StatsItemStore(this, itemData);
  };

  constructKey(item: ItemKeysData): string {
    const category = item.trackedObjectCategory ?? item.category;
    return `${item.location.id}-${item.sensor.id}-${category?.id}`;
  }

  fetchData = runWithLoading(this, async () => {
    const [dataStats, dataLatest] = await Promise.all([
      this.service.getStats(),
      this.service.getLatest(),
      this.tocs.fetchData(),
      this.sensors.fetchData(),
      this.locations.fetchData(),
    ]);
    if (dataStats) {
      this.setStatsData(dataStats);
    }
    if (dataLatest) {
      this.setLatestData(dataLatest);
    }
  });

  @action
  private setStatsData(value: DataStats) {
    this.dataStats = value;
  }

  @action
  private setLatestData(value: DataLatest) {
    this.dataLatest = value;
  }
}
