import { less } from '@/common/less-vars-to-js/expose-less-vars';
import { ISizeSensorState } from 'libreact/lib/SizeSensor';
import { action, computed, observable } from 'mobx';
import { singleton } from 'tsyringe';

@singleton()
export class StatsUiStore {
  @observable
  private headerHeight: number = 0;

  @computed
  get bodyHeight(): string {
    return `calc(100vh - ${less.layoutHeaderHeight} - ${this.headerHeight}px)`;
  }

  @action.bound
  setHeaderHeight({ height }: ISizeSensorState) {
    this.headerHeight = height;
  }
}
