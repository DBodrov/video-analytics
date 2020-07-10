import { ILoading, runWithLoading } from '@/backend/fetch-data-helper';
import { LocationsStore } from '@/company/locations-store';
import { SensorsStore } from '@/company/sensors-store';
import { TocsStore } from '@/company/tocs-store';
import { StatsStore } from '@/stats/stats-store';
import { action, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { EventsFiltersStore } from './events-filters-store';
import { EventsItemStore } from './event-item-store';
import { EventsService } from './events-service';
import {
  TEvents,
  TEvent,
  TEventsStatusesList,
  TCheckCategories,
  TCheckList,
  Checks,
} from './types';

@singleton()
export class EventsStore implements ILoading {
  @observable
  loading: boolean = false;

  @observable.ref
  eventsData: TEvents | undefined;

  @observable.ref
  eventsStatusesData: TEventsStatusesList | undefined;

  @observable.ref
  checkList: TCheckList | undefined;

  @observable.ref
  checkCategories: TCheckCategories | undefined;

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
      return s.id === statusId;
    });
    return statusById?.name;
  }

  eventDescriptionData(event: TEvent) {
    const items = new EventsItemStore(this, event);
    return {
      title: items.checkAndCategory.checkName,
      sensor: items.sensor.title,
      location: items.location.title,
      category: items.checkAndCategory.checkCategory,
    };
  }

  fetchData = runWithLoading(this, async () => {
    const [events, statuses, checks, checkCategories] = await Promise.all([
      this.service.getEvents(),
      this.service.getEventsStatuses(),
      this.service.getAllChecks(),
      this.service.getCheckCategories(),
    ]);
    if (events) {
      this.setEventsData(events);
    }
    if (statuses) {
      this.setEventsStatuses(statuses.eventStatuses);
    }
    if (checks) {
      //TODO: Broken swagger type
      this.setAllChecks((checks as Checks).checks);
    }
    if (checkCategories) {
      //TODO: Broken swagger type
      this.setCheckCategories((checkCategories as any).categories);
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

  @action
  private setAllChecks(value: TCheckList) {
    this.checkList = value;
  }

  @action
  private setCheckCategories(value: TCheckCategories) {
    this.checkCategories = value;
  }
}
