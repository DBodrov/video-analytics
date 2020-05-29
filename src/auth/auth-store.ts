import { AuthApi } from '@/backend/auth/apis/AuthApi';
import { LoginPostResponse201 } from '@/backend/auth/models/LoginPostResponse201';
import { DataLoading, makeFetchData } from '@/backend/data-fetcher-helper';
import { observable } from 'mobx';
import { singleton } from 'tsyringe';
import { LoginFormData } from './auth-types';

@singleton()
export class AuthStore
  implements DataLoading<LoginPostResponse201>, LoginFormData {
  @observable
  loading: boolean = false;

  @observable
  userName: string = '';

  @observable
  password: string = '';

  @observable.ref
  data: LoginPostResponse201 | undefined;

  constructor(private readonly authApi: AuthApi) {}

  postLogin = makeFetchData(this, () =>
    this.authApi.apiAuthLoginPost({
      request: {
        userName: this.userName,
        password: this.password,
      },
    }),
  );
}
