import { useInject } from '@/store/use-inject';
import { List } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { StatsStore } from './stats-store';
import css from './StatsPage.less';

interface Props {
  className?: string;
}

export const StatsPage: React.FC<Props> = observer(props => {
  const [store] = useInject(StatsStore);

  useEffectOnce(() => {
    store.loadStats();
  });

  return (
    <div className={cn(css.container, props.className)}>
      <div className={css.body}>
        <List loading={store.loading}></List>
      </div>
    </div>
  );
});
