import { useInject } from '@/store/use-inject';
import { List } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { StatsListItem } from './components/StatsListItem';
import { StatsStore } from './stats-store';
import { StatsItem } from './stats-types';
import css from './StatsPage.less';

interface Props {
  className?: string;
}

const renderItem = (item: StatsItem) => (
  <StatsListItem key={item.key} item={item} />
);

export const StatsPage: React.FC<Props> = observer(props => {
  const [store] = useInject(StatsStore);

  useEffectOnce(() => {
    store.fetchData();
  });

  return (
    <div className={cn(css.container, props.className)}>
      <div className={css.body}>
        <List
          loading={store.loading}
          dataSource={store.itemsView}
          renderItem={renderItem}
          className={css.list}
        />
      </div>
    </div>
  );
});
