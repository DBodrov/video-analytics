import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { computed } from 'mobx';
import { StatsStore } from './stats-store';
import {
  ApiImage,
  ItemKey,
  LatestItemData,
  RefItemToShow,
  StatsItem,
  StatsItemData,
} from './stats-types';

export class StatsItemStore implements StatsItem {
  constructor(
    private readonly store: StatsStore,
    private readonly data: StatsItemData,
  ) {}

  @computed
  get key(): ItemKey {
    return this.store.constructKey(this.data);
  }

  @computed
  private get latestData(): LatestItemData | undefined {
    return this.store.latestDataMap.get(this.key);
  }

  @computed
  get location(): RefItemToShow {
    const { id } = this.data.location;
    return {
      id,
      title: this.store.locations.getItem(id)?.name ?? `Id ${id}`,
    };
  }

  @computed
  get image(): ApiImage | null {
    return this.latestData?.image ?? null;
  }

  @computed
  get sensor(): RefItemToShow {
    const { id } = this.data.sensor;
    return {
      id,
      title: this.store.sensors.getItem(id)?.name ?? `Id ${id}`,
    };
  }

  @computed
  get category(): RefItemToShow {
    const { id } = this.data.trackedObjectCategory;
    return {
      id,
      title: this.store.tocs.getItem(id)?.name ?? `Id ${id}`,
    };
  }

  @computed
  get inCount(): number {
    return this.data.today.inCount;
  }

  @computed
  get outCount(): number {
    return this.data.today.outCount;
  }

  @computed
  get lastUpdateDateF(): string | undefined {
    const dateStr = this.latestData?.event?.timestamp;
    if (!dateStr) {
      return undefined;
    }
    return format(new Date(dateStr), 'dd MMMM yyyy HH:MM', { locale: ru });
  }

  @computed
  get trackedObjectNumber(): string | undefined {
    return this.latestData?.trackedObject?.licensePlateNumber;
  }
}
