import { createBrowserHistory, History } from 'history';
import { action, computed, observable } from 'mobx';
import { matchPath } from 'react-router';
import { singleton } from 'tsyringe';
import { ROUTES, ROUTE_NAMES_ARRAY } from './router-constants';
import { RouteName } from './router-types';

const matches = (location: HistoryLocation) => (
  routeName: RouteName,
): boolean => !!matchPath(location.pathname, ROUTES[routeName]);

interface HistoryLocation
  extends Pick<Location, 'pathname' | 'search' | 'hash'> {
  state?: any;
}

@singleton()
export class RouterStore {
  @observable.ref
  private location: HistoryLocation | undefined = window.location;

  readonly history: History = createBrowserHistory();

  constructor() {
    this.history.listen(this.setLocation);
  }

  @action.bound
  private setLocation(location: HistoryLocation) {
    this.location = location;
  }

  @computed
  get activeRoute(): RouteName | undefined {
    const { location } = this;
    return location ? ROUTE_NAMES_ARRAY.find(matches(location)) : undefined;
  }
}
