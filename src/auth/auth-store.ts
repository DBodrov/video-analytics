import { AuthApi } from '@/backend/auth/apis/AuthApi';
import { LoginPostResponse201 } from '@/backend/auth/models/LoginPostResponse201';
import { DataLoading, makeFetchData } from '@/backend/fetch-data-helper';
import { action, observable } from 'mobx';
import { singleton } from 'tsyringe';
import { LoginFormData } from './auth-types';

const TOKEN_KEY = 'ALA-auth-token';

@singleton()
export class AuthStore
  implements DataLoading<LoginPostResponse201>, LoginFormData {
  @observable
  private token: string | undefined = localStorage.get(TOKEN_KEY);

  @observable
  loading: boolean = false;

  @observable
  userName: string = '';

  @observable
  password: string = '';

  @observable.ref
  data: LoginPostResponse201 | undefined;

  constructor(private readonly authApi: AuthApi) {}

  @action
  private setToken(token: string | undefined) {
    this.token = token;
    localStorage.save(TOKEN_KEY, this.token);
  }

  private fetchPostLogin = () =>
    this.authApi.apiAuthLoginPost({
      request: {
        userName: this.userName,
        password: this.password,
      },
    });

  private onLoginSuccess = (data: LoginPostResponse201) => {
    this.setToken(data.accessToken.value);
  };

  postLogin = makeFetchData(this, {
    fetchFn: this.fetchPostLogin,
    onSuccess: this.onLoginSuccess,
  });
}
