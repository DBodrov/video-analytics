import { fetchWithShowError } from '@/backend/fetch-data-helper';
import { EventApi } from '@/backend/main/apis';
import { RefsApi } from '@/backend/auth';
import { COMPANY_ID } from '@/company/company-constants';
import { singleton } from 'tsyringe';
import {TEventsStatusesList} from './types';

type ApiParams = Parameters<EventApi['apiVaCompaniesCompanyIdEventsInoutStatsGet']>[0];

@singleton()
export class EventsService {
  private readonly params: ApiParams = {
    companyId: COMPANY_ID,
  };

  constructor(private readonly eventsApi: EventApi, private readonly refsApi: RefsApi) {}

  getEvents = () => fetchWithShowError(this.eventsApi.apiVaCompaniesCompanyIdEventsGet(this.params));

  getStats = () => fetchWithShowError(this.eventsApi.apiVaCompaniesCompanyIdEventsInoutStatsGet(this.params));

  getLatest = () => fetchWithShowError(this.eventsApi.apiVaCompaniesCompanyIdEventsLatestGet(this.params));

  getEventsStatuses = (): Promise<any> => fetchWithShowError(this.refsApi.apiAuthRefsEventStatusesGet());
}
