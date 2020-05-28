import { DataLoading, makeFetchData } from '@/backend/data-fetcher-helper';
import { EventApi } from '@/backend/main/apis/EventApi';
import { InoutEventsStatsGetResponse200 } from '@/backend/main/models/InoutEventsStatsGetResponse200';
import { COMPANY_ID } from '@/company/company-constants';
import { observable } from 'mobx';
import { singleton } from 'tsyringe';

type StatsData = InoutEventsStatsGetResponse200;

@singleton()
export class StatsStore implements DataLoading<StatsData> {
  @observable
  loading: boolean = false;

  @observable.ref
  data: StatsData | undefined;

  constructor(private readonly eventsApi: EventApi) {}

  loadStats = makeFetchData(this, () =>
    this.eventsApi.apiVaCompaniesCompanyIdEventsInoutStatsGet({
      companyId: COMPANY_ID,
    }),
  );
}
