import { container } from 'tsyringe';
import { ApiConfig } from './api-configuration';
import { AuthApi } from './auth/apis/AuthApi';
import { CompanyApi, CoreApi, EventApi } from './main/apis';

export function registerApiServices() {
  container.registerInstance(CompanyApi, new CompanyApi(ApiConfig.get()));
  container.registerInstance(CoreApi, new CoreApi(ApiConfig.get()));
  container.registerInstance(EventApi, new EventApi(ApiConfig.get()));
  container.registerInstance(AuthApi, new AuthApi(ApiConfig.get() as any));
}