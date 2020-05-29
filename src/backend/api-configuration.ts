import { abortableFetch } from './abortable-fetch';
import { API_BASE_PATH } from './api-constants';
import { showResponseErrorMware } from './api-middlewares';
import { Configuration } from './main/runtime';

export class ApiConfig {
  private static instance = new ApiConfig();

  static get(): Configuration {
    return this.instance.config;
  }

  private config = new Configuration({
    basePath: API_BASE_PATH,
    accessToken: () => '',
    middleware: [{ post: showResponseErrorMware }],
    fetchApi: abortableFetch,
  });

  private constructor() {}
}
