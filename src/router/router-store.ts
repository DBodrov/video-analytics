import { singleton } from 'tsyringe';
import { createBrowserHistory } from 'history';

@singleton()
export class RouterStore {
  readonly history = createBrowserHistory();
}
