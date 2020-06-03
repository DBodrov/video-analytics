import { DataAndLoading, makeFetchData } from '@/backend/fetch-data-helper';
import { CompanyApi } from '@/backend/main/apis/CompanyApi';
import {
  TocsGetResponse200,
  TocsGetResponse200TrackedObjectCategories,
} from '@/backend/main/models';
import { computed, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { COMPANY_ID } from './company-constants';

@singleton()
export class TocsStore implements DataAndLoading<TocsGetResponse200> {
  @observable
  loading: boolean = false;

  @observable.ref
  data: TocsGetResponse200 | undefined;

  constructor(private readonly companyApi: CompanyApi) {}

  @computed
  private get items(): Map<number, TocsGetResponse200TrackedObjectCategories> {
    return new Map(
      (this.data?.trackedObjectCategories ?? []).map(item => [item.id, item]),
    );
  }

  fetchData = makeFetchData(this, {
    fetchFn: () =>
      this.companyApi.apiVaCompaniesCompanyIdTocsGet({ companyId: COMPANY_ID }),
  });

  getItem(id: number): TocsGetResponse200TrackedObjectCategories | undefined {
    return this.items.get(id);
  }
}
