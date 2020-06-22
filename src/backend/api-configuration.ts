import { AuthStore } from '@/auth/auth-store';
import { to } from '@/common/utils/await-to-js';
import { message } from 'antd';
import { container } from 'tsyringe';
import { abortableFetch } from './abortable-fetch';
import { API_BASE_PATH } from './api-constants';
import { Configuration, ResponseContext } from './main/runtime';
import { showRequestError } from './show-request-error';

export class ApiConfig {
  private static instance = new ApiConfig();

  static get(): Configuration {
    return this.instance.getConfig();
  }

  private processResponseError = async (context: ResponseContext) => {
    const { status } = context.response;
    if (status === 401) {
      this.process401(context);
    }
    if (status >= 400 && status !== 401) {
      this.showResponseError(context);
    }
    return context.response;
  };

  private process401(context: ResponseContext) {
    if (context.url.endsWith('/login')) {
      message.error('Неправильный логин или пароль');
    } else {
      this.auth.logout();
    }
  }

  private async showResponseError(context: ResponseContext) {
    const { status, statusText } = context.response;
    const [body] = await to(context.response.json());
    showRequestError({
      status,
      statusText,
      method: context.init.method,
      url: context.url,
      message: body?.message,
    });
  }

  private constructor() {}

  private getConfig() {
    const that = this;
    return new Configuration({
      basePath: API_BASE_PATH,
      middleware: [{ post: this.processResponseError }],
      headers: {
        get Authorization() {
          return `Bearer ${that.auth.accessToken}`;
        },
      },
      fetchApi: abortableFetch,
    });
  }

  private get auth(): AuthStore {
    return container.resolve(AuthStore);
  }
}
