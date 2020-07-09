import { container } from 'tsyringe';
import { ApiConfig } from './api-configuration';
import { AuthApi, RefsApi } from './auth/apis';
import { CompanyApi, CoreApi, EventApi } from './main/apis';

export function registerApiServices() {
  container.registerInstance(CompanyApi, new CompanyApi(ApiConfig.get()));
  container.registerInstance(CoreApi, new CoreApi(ApiConfig.get()));
  container.registerInstance(EventApi, new EventApi(ApiConfig.get()));
  container.registerInstance(AuthApi, new AuthApi(ApiConfig.get() as any));
  container.registerInstance(RefsApi, new RefsApi(ApiConfig.get() as any));
}
