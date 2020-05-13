import { Configuration } from './generated/runtime';

export class ApiConfig {
  private static instance = new ApiConfig();

  static get(): Configuration {
    return this.instance.config;
  }

  private config = new Configuration({
    accessToken: () => '',
  });

  private constructor() {}
}
