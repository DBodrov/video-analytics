import { computed } from 'mobx';
import { EventsStore } from './events-store';
import {TEvent} from './types';

export class EventsItemStore {
  constructor(
    private readonly store: EventsStore,
    private readonly data: TEvent,
  ) {}

  @computed
  get location() {
    const { locationId } = this.data;
    return {
      id: locationId,
      title: this.store.locations.getItem(locationId)?.name ?? `Id ${locationId}`,
    };
  }

  @computed
  get sensor() {
    const { sensorId } = this.data;
    return {
      id: sensorId,
      title: this.store.sensors.getItem(sensorId)?.name ?? `Id ${sensorId}`,
    };
  }

  @computed
  get checkAndCategory() {
    const {checkId} = this.data;
    const currentCheck: any = this.store.checkList?.find(check => check.id === checkId);
    const checkCategory = this.store.checkCategories?.find(c => {

      return c.id === currentCheck?.category_id
    });
    return {
      checkName: currentCheck?.name,
      checkCategory: checkCategory?.name,
    }
  }
}
