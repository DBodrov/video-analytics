import { ILoading, runWithLoading } from '@/backend/fetch-data-helper';
import { LocationsStore } from '@/company/locations-store';
import { SensorsStore } from '@/company/sensors-store';
import { TocsStore } from '@/company/tocs-store';
import { action, computed, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { StatsItemStore } from './stats-item-store';
import { StatsService } from './stats-service';
import {
  DataLatest,
  DataStats,
  ItemDataKeys,
  ItemKey,
  LatestItemData,
  StatsItemData,
} from './stats-types';

@singleton()
export class StatsStore implements ILoading {
  @observable
  loading: boolean = false;

  @observable.ref
  private dataStats: DataStats | undefined;

  @observable.ref
  private dataLatest: DataLatest | undefined;

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
  get items() {
    return this.dataStats?.stats.map(this.convertStatsItem) ?? [];
  }

  @computed
  get itemsView() {
    return this.items;
  }

  private convertStatsItem = (itemData: StatsItemData) => {
    return new StatsItemStore(this, itemData);
  };

  constructKey(itemData: ItemDataKeys): string {
    return `${itemData.location.id}-${itemData.sensor.id}${itemData.trackedObjectCategory.id}`;
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
