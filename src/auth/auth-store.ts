import { AuthApi } from '@/backend/auth/apis/AuthApi';
import { LoginPostResponse201 } from '@/backend/auth/models/LoginPostResponse201';
import { DataLoading, makeFetchData } from '@/backend/fetch-data-helper';
import { to } from '@/common/utils/await-to-js';
import { EventBus } from '@/store/event-bus/event-bus';
import { action, computed, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { loginFields } from './auth-constants';
import { LoginFormData } from './auth-types';

const ACCESS_TOKEN_KEY = 'VA-access-token';
const REFRESH_TOKEN_KEY = 'VA-refresh-token';
const USERNAME_KEY = 'VA-user-name';
const REFRESH_TOKEN_INTERVAL = 10 * (1000 * 60);

@singleton()
export class AuthStore
  implements DataLoading<LoginPostResponse201>, LoginFormData {
  @observable
  private accessToken: string | undefined = localStorage
    .getItem(ACCESS_TOKEN_KEY)
    ?.trim();

  @observable
  private refreshToken: string | undefined = localStorage
    .getItem(REFRESH_TOKEN_KEY)
    ?.trim();

  @observable
  loading: boolean = false;

  @observable
  userName: string = localStorage.getItem(USERNAME_KEY) ?? '';

  @observable
  password: string = '';

  @observable.ref
  data: LoginPostResponse201 | undefined;

  constructor(private readonly authApi: AuthApi, eventBus: EventBus) {
    // eventBus.on('appStart', this.onAppStart);
  }

  @computed
  get formInitialValues(): Partial<LoginFormData> {
    return { userName: this.userName };
  }

  @computed
  get isAuthorized(): boolean {
    return Boolean(this.accessToken);
  }

  logout = () => {
    this.setAccessToken(undefined);
    this.setRefreshToken(undefined);
  };

  @action
  private setRefreshToken(value: string | undefined) {
    this.refreshToken = value;
    localStorage.setItem(REFRESH_TOKEN_KEY, value ?? '');
  }

  @action
  private setAccessToken(value: string | undefined) {
    this.accessToken = value;
    localStorage.setItem(ACCESS_TOKEN_KEY, value ?? '');
  }

  @action
  private setUserName(value: string) {
    this.userName = value;
    localStorage.setItem(USERNAME_KEY, value ?? '');
  }

  onFormValuesChange = (changedValues: Partial<LoginFormData>) => {
    if (loginFields.userName in changedValues) {
      this.setUserName(changedValues.userName ?? '');
    }
  };

  private onSuccessfulLogin = (data: LoginPostResponse201) => {
    this.setAccessToken(data.accessToken.value);
    this.setRefreshToken(data.refreshToken.value);
  };

  postLogin = makeFetchData(this, {
    fetchFn: (credentials: LoginFormData) =>
      this.authApi.apiAuthLoginPost({
        request: credentials,
      }),
    onSuccess: this.onSuccessfulLogin,
  });

  private onAppStart = () => {
    if (this.accessToken) {
      this.checkToken();
    }
    setInterval(this.fetchRefreshToken, REFRESH_TOKEN_INTERVAL);
  };

  private fetchRefreshToken = async () => {
    if (!this.refreshToken) {
      return;
    }
    const [data] = await to(
      this.authApi.apiAuthTokenPost({
        authorization: `Bearer ${this.refreshToken}`,
      }),
    );
    if (data) {
      this.setAccessToken(data.accessToken.value);
    }
  };

  private async checkToken() {
    const [, err] = await to(
      this.authApi.apiAuthCheckTokenGet({
        authorization: `Bearer ${this.accessToken}`,
      }),
    );
    if (err && (err as any).status === 400) {
      this.logout();
    }
  }
}
