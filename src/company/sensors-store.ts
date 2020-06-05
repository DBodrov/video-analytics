import { CompanyApi } from '@/backend/main/apis/CompanyApi';
import {
  CompanySensorsGetResponse200,
  SensorsGetResponse200Sensors,
} from '@/backend/main/models';
import { singleton } from 'tsyringe';
import { BaseRefStore } from './base-ref-store';
import { COMPANY_ID } from './company-constants';

@singleton()
export class SensorsStore extends BaseRefStore<
  CompanySensorsGetResponse200,
  SensorsGetResponse200Sensors
> {
  constructor(companyApi: CompanyApi) {
    super({
      fetchFn: () =>
        companyApi.apiVaCompaniesCompanyIdSensorsGet({
          companyId: COMPANY_ID,
        }),
      getItems: data => data.sensors,
    });
  }
}
