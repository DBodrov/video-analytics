import { DataAndLoading, makeFetchData } from '@/backend/fetch-data-helper';
import { CompanyApi } from '@/backend/main/apis/CompanyApi';
import {
  TocsGetResponse200,
  TocsGetResponse200TrackedObjectCategories,
} from '@/backend/main/models';
import { computed, observable } from 'mobx';
import { singleton } from 'tsyringe';

@singleton()
export class TocsStore implements DataAndLoading<TocsGetResponse200> {
  @observable
  loading: boolean = false;

  @observable.ref
  data: TocsGetResponse200 | undefined;

  constructor(private readonly companyApi: CompanyApi) {}

  @computed
  get tocs(): Map<number, TocsGetResponse200TrackedObjectCategories> {
    return new Map(
      (this.data?.trackedObjectCategories ?? []).map(toc => [toc.id, toc]),
    );
  }

  fetchData = makeFetchData(this, {
    fetchFn: this.companyApi.apiVaTocsGet.bind(this.companyApi),
  });
}
