import { container } from 'tsyringe';
import { ApiConfig } from './api-configuration';
import { CompanyApi, CoreApi, EventApi } from './generated/apis';

export function registerApiServices() {
  container.registerInstance(CompanyApi, new CompanyApi(ApiConfig.get()));
  container.registerInstance(CoreApi, new CoreApi(ApiConfig.get()));
  container.registerInstance(EventApi, new EventApi(ApiConfig.get()));
}
