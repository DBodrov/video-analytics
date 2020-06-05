import {
  DropdownFilter,
  DropdownFilterProps,
} from '@/common/components/dropdown/DropdownFilter';
import { pick } from '@/common/utils/pick';
import { useInject } from '@/store/use-inject';
import { Space } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StatsStore } from '../stats-store';

interface Props {
  className?: string;
}

function pickProps(filterStore: DropdownFilterProps): DropdownFilterProps {
  return pick(
    filterStore,
    'title',
    'currentTitle',
    'items',
    'currentKey',
    'onClick',
  );
}

export const StatsFilters: React.FC<Props> = observer(props => {
  const [store] = useInject(StatsStore);
  const { location, sensor, category } = store.filters;

  return (
    <Space className="flex-wrap">
      <DropdownFilter {...pickProps(location)} className="mb-3" />
      <DropdownFilter {...pickProps(sensor)} className="mb-3" />
      <DropdownFilter {...pickProps(category)} className="mb-3" />
    </Space>
  );
});
