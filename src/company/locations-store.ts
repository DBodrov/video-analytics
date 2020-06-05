import { CompanyApi } from '@/backend/main/apis/CompanyApi';
import {
  CompanyLocationsGetResponse200,
  LocationsGetResponse200Locations,
} from '@/backend/main/models';
import { singleton } from 'tsyringe';
import { BaseRefStore } from './base-ref-store';
import { COMPANY_ID } from './company-constants';

@singleton()
export class LocationsStore extends BaseRefStore<
  CompanyLocationsGetResponse200,
  LocationsGetResponse200Locations
> {
  constructor(companyApi: CompanyApi) {
    super({
      fetchFn: () =>
        companyApi.apiVaCompaniesCompanyIdLocationsGet({
          companyId: COMPANY_ID,
        }),
      getItems: data => data.locations,
    });
  }
}
