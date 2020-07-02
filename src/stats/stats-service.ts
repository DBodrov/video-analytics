import { fetchWithShowError } from '@/backend/fetch-data-helper';
import { EventApi } from '@/backend/main/apis';
import { RefsApi } from '@/backend/auth';
import { COMPANY_ID } from '@/company/company-constants';
import { singleton } from 'tsyringe';
import { DataLatest, DataStats } from './stats-types';

type ApiParams = Parameters<EventApi['apiVaCompaniesCompanyIdEventsInoutStatsGet']>[0];

@singleton()
export class StatsService {
  private readonly params: ApiParams = {
    companyId: COMPANY_ID,
  };

  constructor(private readonly eventsApi: EventApi, private readonly refsApi: RefsApi) {}

  getStats = (): Promise<DataStats | undefined> =>
    fetchWithShowError(this.eventsApi.apiVaCompaniesCompanyIdEventsInoutStatsGet(this.params));

  getLatest = (): Promise<DataLatest | undefined> =>
    fetchWithShowError(this.eventsApi.apiVaCompaniesCompanyIdEventsLatestGet(this.params));
}
