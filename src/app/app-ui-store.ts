import { ROUTE_NAMES } from '@/router/router-constants';
import { RouterStore } from '@/router/router-store';
import { action, computed, observable } from 'mobx';
import { singleton } from 'tsyringe';

@singleton()
export class AppUiStore {
  @observable.ref
  appHeaderContainer: HTMLElement | null = null;

  constructor(private readonly router: RouterStore) {}

  @computed
  get currentPageHasOwnScrolling(): boolean {
    return this.router.activeRoute === ROUTE_NAMES.stats;
  }

  @action.bound
  setAppHeaderContainer(element: HTMLElement | null) {
    this.appHeaderContainer = element;
  }
}
