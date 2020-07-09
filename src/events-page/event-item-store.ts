import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { computed } from 'mobx';
import { EventsStore } from './events-store';
import {TEvent} from './types';
// import {
//   ApiImage,
//   ItemKey,
//   LatestItemData,
//   RefItemToShow,
//   StatsItem,
//   StatsItemData,
// } from './types';

export class EventsItemStore {
  constructor(
    private readonly store: EventsStore,
    private readonly data: TEvent,
  ) {}

  // @computed
  // get key(): string {
  //   return this.store.constructKey(this.data);
  // }

  // @computed
  // private get latestData(): LatestItemData | undefined {
  //   return this.store.latestDataMap.get(this.key);
  // }

  @computed
  get location() {
    const { locationId } = this.data;
    return {
      id: locationId,
      title: this.store.locations.getItem(locationId)?.name ?? `Id ${locationId}`,
    };
  }

  // @computed
  // get image(): ApiImage | null {
  //   return this.latestData?.image ?? null;
  // }

  @computed
  get sensor() {
    const { sensorId } = this.data;
    return {
      id: sensorId,
      title: this.store.sensors.getItem(sensorId)?.name ?? `Id ${sensorId}`,
    };
  }




  // @computed
  // get template() {
  //   const { tocId } = this.data;
  //   return {
  //     id: tocId,
  //     title: this.store.sensors.getItem(sensorId)?.name ?? `Id ${sensorId}`,
  //   };
  // }

  // @computed
  // get category(): RefItemToShow {
  //   const { id } = this.data.trackedObjectCategory;
  //   return {
  //     id,
  //     title: this.store.tocs.getItem(id)?.name ?? `Id ${id}`,
  //   };
  // }

  // @computed
  // get inCount(): number {
  //   return this.data.today.inCount;
  // }

  // @computed
  // get outCount(): number {
  //   return this.data.today.outCount;
  // }

  // @computed
  // get lastUpdateDateF(): string | undefined {
  //   const dateStr = this.latestData?.event?.timestamp;
  //   if (!dateStr) {
  //     return undefined;
  //   }
  //   return format(new Date(dateStr), 'dd MMMM yyyy HH:MM', { locale: ru });
  // }

  // @computed
  // get trackedObjectNumber(): string | undefined {
  //   return this.latestData?.trackedObject?.licensePlateNumber;
  // }
}
