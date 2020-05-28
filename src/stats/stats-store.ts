import { singleton } from 'tsyringe';
import { EventApi } from '@/backend/generated/apis/EventApi';
import { COMPANY_ID } from '@/company/company-constants';
import { observable, action } from 'mobx';
import { InoutEventsStatsGetResponse200 } from '@/backend/generated/models/InoutEventsStatsGetResponse200';
import { makeFetchData, DataLoading } from '@/backend/data-fetcher-helper';

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
