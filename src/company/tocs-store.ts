import { CompanyApi } from '@/backend/main/apis/CompanyApi';
import {
  TocsGetResponse200,
  TocsGetResponse200TrackedObjectCategories,
} from '@/backend/main/models';
import { singleton } from 'tsyringe';
import { BaseRefStore } from './base-ref-store';
import { COMPANY_ID } from './company-constants';

@singleton()
export class TocsStore extends BaseRefStore<
  TocsGetResponse200,
  TocsGetResponse200TrackedObjectCategories
> {
  constructor(companyApi: CompanyApi) {
    super({
      fetchFn: () =>
        companyApi.apiVaCompaniesCompanyIdTocsGet({
          companyId: COMPANY_ID,
        }),
      getItems: data => data.trackedObjectCategories,
    });
  }
}
