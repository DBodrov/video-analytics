import { AuthApi } from '@/backend/auth/apis/AuthApi';
import { LoginPostResponse201 } from '@/backend/auth/models/LoginPostResponse201';
import { DataLoading, makeFetchData } from '@/backend/fetch-data-helper';
import { action, computed, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { LoginFormData } from './auth-types';

const TOKEN_KEY = 'ALA-auth-token';
const USERNAME_KEY = 'ALA-user-name';

@singleton()
export class AuthStore
  implements DataLoading<LoginPostResponse201>, LoginFormData {
  @observable
  private token: string | undefined = localStorage.getItem(TOKEN_KEY)?.trim();

  @observable
  loading: boolean = false;

  @observable
  userName: string = localStorage.getItem(USERNAME_KEY) ?? '';

  @observable
  password: string = '';

  @observable.ref
  data: LoginPostResponse201 | undefined;

  constructor(private readonly authApi: AuthApi) {}

  @computed
  get formInitialValues(): Partial<LoginFormData> {
    return { userName: this.userName };
  }

  @computed
  get isAuthorized(): boolean {
    return Boolean(this.token);
  }

  logout() {
    this.setToken(undefined);
  }

  @action
  private setToken(token: string | undefined) {
    this.token = token;
    localStorage.setItem(TOKEN_KEY, this.token ?? '');
  }

  @action
  private setUserName(value: string) {
    this.userName = value;
    localStorage.setItem(USERNAME_KEY, value ?? '');
  }

  private onSuccessfulLogin = (data: LoginPostResponse201) => {
    this.setToken(data.accessToken.value);
  };

  private postLogin = makeFetchData(this, {
    fetchFn: (credentials: LoginFormData) =>
      this.authApi.apiAuthLoginPost({
        request: credentials,
      }),
    onSuccess: this.onSuccessfulLogin,
  });

  onFormFinish = (formData: LoginFormData) => {
    this.setUserName(formData.userName);
    this.postLogin(formData);
  };
}
