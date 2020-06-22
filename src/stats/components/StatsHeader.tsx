import { useInject } from '@/store/use-inject';
import { Typography } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StatsStore } from '../stats-store';
import css from './StatsHeader.less';
const { Text } = Typography;

interface Props {
  className?: string;
}

export const StatsHeader: React.FC<Props> = observer(props => {
  const [store] = useInject(StatsStore);
  const { location } = store.filters;
  const title = location.all ? 'Все площадки' : location.currentTitle;

  return (
    <div className={cn('font-semibold', css.container, props.className)}>
      <span className={css.label}>Подсчёт грузовых транспортных средств: </span>
      {title}
    </div>
  );
});
