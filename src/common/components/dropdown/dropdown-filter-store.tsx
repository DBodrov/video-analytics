import { ALL_VALUES_ID } from '@/common/common-constants';
import { DROPDOWN_ITEM_ALL } from '@/common/components/dropdown/dropdown-constants';
import { DropdownFilterItem } from '@/common/components/dropdown/dropdown-types';
import { toNumber } from '@/common/utils/to-number';
import { action, computed, observable } from 'mobx';
import { DropdownFilterProps } from './DropdownFilter';

interface DropdownFilterParams {
  title: string;
  getItems(): DropdownFilterItem[];
}

export class DropdownFilterStore implements DropdownFilterProps {
  @observable
  private currentValueRaw: number = ALL_VALUES_ID;

  constructor(private readonly params: DropdownFilterParams) {}

  @computed
  get title(): string {
    return this.params.title;
  }

  @computed
  get items(): DropdownFilterItem[] {
    return [DROPDOWN_ITEM_ALL].concat(this.params.getItems());
  }

  @computed
  get currentValue(): number {
    return this.has(this.currentValueRaw)
      ? this.currentValueRaw
      : ALL_VALUES_ID;
  }

  @computed
  get currentKey(): string {
    return String(this.currentValue);
  }

  @computed
  get currentTitle(): string {
    return (
      this.items.find(({ key }) => key === this.currentKey)?.title ??
      `Id ${this.currentKey}`
    );
  }

  @computed
  get all(): boolean {
    return this.currentValue === ALL_VALUES_ID;
  }

  private has(id: number): boolean {
    return this.items.some(({ key }) => key === String(id));
  }

  @action
  private setCurrentValue(value: number | string) {
    this.currentValueRaw = toNumber(value);
  }

  onClick: DropdownFilterProps['onClick'] = ({ key }) => {
    this.setCurrentValue(key);
  };
}
