import { DataAndLoading, makeFetchData } from '@/backend/fetch-data-helper';
import { CompanyApi } from '@/backend/main/apis/CompanyApi';
import {
  CompanySensorsGetResponse200,
  SensorsGetResponse200Sensors,
} from '@/backend/main/models';
import { computed, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { COMPANY_ID } from './company-constants';

@singleton()
export class SensorsStore
  implements DataAndLoading<CompanySensorsGetResponse200> {
  @observable
  loading: boolean = false;

  @observable.ref
  data: CompanySensorsGetResponse200 | undefined;

  constructor(private readonly companyApi: CompanyApi) {}

  @computed
  private get items(): Map<number, SensorsGetResponse200Sensors> {
    return new Map((this.data?.sensors ?? []).map(item => [item.id, item]));
  }

  fetchData = makeFetchData(this, {
    fetchFn: () =>
      this.companyApi.apiVaCompaniesCompanyIdSensorsGet({
        companyId: COMPANY_ID,
      }),
  });

  getItem(id: number): SensorsGetResponse200Sensors | undefined {
    return this.items.get(id);
  }
}
