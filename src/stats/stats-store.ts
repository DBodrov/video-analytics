import { ILoading, runWithLoading } from '@/backend/fetch-data-helper';
import { TocsStore } from '@/company/tocs-store';
import { action, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { StatsService } from './stats-service';
import { DataLatest, DataStats } from './stats-types';

@singleton()
export class StatsStore implements ILoading {
  @observable
  loading: boolean = false;

  @observable.ref
  private dataStats: DataStats | undefined;

  @observable.ref
  dataLatest: DataLatest | undefined;

  constructor(
    private readonly service: StatsService,
    private readonly tocs: TocsStore,
  ) {}

  fetchData = runWithLoading(this, async () => {
    const [dataStats, dataLatest] = await Promise.all([
      this.service.getStats(),
      this.service.getLatest(),
      this.tocs.fetchData(),
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
