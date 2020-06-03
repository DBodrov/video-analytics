import { DataAndLoading, makeFetchData } from '@/backend/fetch-data-helper';
import { CompanyApi } from '@/backend/main/apis/CompanyApi';
import {
  CompanyLocationsGetResponse200,
  LocationsGetResponse200Locations,
} from '@/backend/main/models';
import { computed, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { COMPANY_ID } from './company-constants';

@singleton()
export class LocationsStore
  implements DataAndLoading<CompanyLocationsGetResponse200> {
  @observable
  loading: boolean = false;

  @observable.ref
  data: CompanyLocationsGetResponse200 | undefined;

  constructor(private readonly companyApi: CompanyApi) {}

  @computed
  private get items(): Map<number, LocationsGetResponse200Locations> {
    return new Map((this.data?.locations ?? []).map(item => [item.id, item]));
  }

  fetchData = makeFetchData(this, {
    fetchFn: () =>
      this.companyApi.apiVaCompaniesCompanyIdLocationsGet({
        companyId: COMPANY_ID,
      }),
  });

  getItem(id: number): LocationsGetResponse200Locations | undefined {
    return this.items.get(id);
  }
}
