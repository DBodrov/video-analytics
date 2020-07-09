import { ILoading, runWithLoading } from '@/backend/fetch-data-helper';
import { LocationsStore } from '@/company/locations-store';
import { SensorsStore } from '@/company/sensors-store';
import { TocsStore } from '@/company/tocs-store';
import { StatsStore } from '@/stats/stats-store';
import { action, computed, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { EventsFiltersStore } from './events-filters-store';
import { EventsItemStore } from './event-item-store';
import { EventsService } from './events-service';
import { TEvents, TEvent, TEventsStatus, TEventsStatusesList } from './types';
// import { StatsService } from './stats-service';
// import {
//   DataLatest,
//   DataStats,
//   ItemKey,
//   ItemKeysData,
//   LatestItemData,
//   StatsItem,
//   StatsItemData,
// } from './stats-types';

@singleton()
export class EventsStore implements ILoading {
  @observable
  loading: boolean = false;

  @observable.ref
  eventsData: TEvents | undefined;

  @observable.ref
  eventsStatusesData: TEventsStatusesList | undefined;

  // @observable.ref
  // private dataLatest: DataLatest | undefined;

  filters = new EventsFiltersStore(this);

  constructor(
    private readonly service: EventsService,
    readonly stats: StatsStore,
    readonly tocs: TocsStore,
    readonly sensors: SensorsStore,
    readonly locations: LocationsStore,
  ) {}

  getEventStatus(statusId: number) {
    const statusById = this.eventsStatusesData?.find(s => {
      return s.id === statusId
    })
    return statusById?.name;
  }


  eventDescriptionData(event: TEvent) {
    const items = new EventsItemStore(this, event);
    return {
      title: '[__MOCK__] Отсутствует каска',
      sensor: items.sensor.title,
      location: items.location.title,
      template: '[__MOCK__] Контроль безопасности'
    };
  }

  // @computed
  // get latestDataMap(): Map<ItemKey, LatestItemData> {
  //   return new Map(this.dataLatest?.events.map(item => [this.constructKey(item), item]));
  // }

  // @computed
  // private get items(): StatsItem[] {
  //   return this.dataStats?.stats.map(this.convertStatsItem) ?? [];
  // }

  // @computed
  // private get itemsFiltered(): StatsItem[] {
  //   return this.items.filter(this.filter);
  // }

  // @computed
  // get itemsView(): StatsItem[] {
  //   return this.itemsFiltered;
  // }

  // private filter = (item: StatsItem): boolean => {
  //   const { location, sensor } = this.filters;
  //   return (
  //     (location.all || item.location.id === location.currentValue) &&
  //     (sensor.all || item.sensor.id === sensor.currentValue) &&
  //     (category.all || item.category.id === category.currentValue)
  //   );
  // };

  // private convertStatsItem = (itemData: StatsItemData): StatsItem => {
  //   return new StatsItemStore(this, itemData);
  // };

  // constructKey(item: ItemKeysData): string {
  //   const category = item.trackedObjectCategory ?? item.category;
  //   return `${item.location.id}-${item.sensor.id}-${category?.id}`;
  // }

  fetchData = runWithLoading(this, async () => {
    const [events, statuses] = await Promise.all([
      this.service.getEvents(),
      this.service.getEventsStatuses()
      // this.tocs.fetchData(),
      // this.sensors.fetchData(),
      // this.locations.fetchData(),
    ]);
    if (events) {
      this.setEventsData(events);
    }
    if (statuses) {
      this.setEventsStatuses(statuses.event_statuses as TEventsStatusesList);

    }
  });

  @action
  private setEventsData(value: TEvents) {
    this.eventsData = value;
  }

  @action
  private setEventsStatuses(value: TEventsStatusesList) {
    this.eventsStatusesData = value;
  }
}
