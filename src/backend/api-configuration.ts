import { Configuration } from './main/runtime';

export class ApiConfig {
  private static instance = new ApiConfig();

  static get(): Configuration {
    return this.instance.config;
  }

  private config = new Configuration({
    basePath: '',
    accessToken: () => '',
  });

  private constructor() {}
}
