import { AppUiStore } from '@/app/app-ui-store';
import { useInject } from '@/store/use-inject';
import { List } from 'antd';
import cn from 'classnames';
import { SizeSensor } from 'libreact/lib/SizeSensor';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { createPortal } from 'react-dom';
import { useEffectOnce } from 'react-use';
import { StatsFilters } from './components/StatsFilters';
import { StatsHeader } from './components/StatsHeader';
import { StatsListItem } from './components/StatsListItem';
import { StatsStore } from './stats-store';
import { StatsItem } from './stats-types';
import { StatsUiStore } from './stats-ui-store';
import css from './StatsPage.less';

interface Props {
  className?: string;
}

const renderItem = (item: StatsItem) => (
  <StatsListItem key={item.key} item={item} />
);

export const StatsPage: React.FC<Props> = observer(props => {
  const [store, statsUi, appUi] = useInject(
    StatsStore,
    StatsUiStore,
    AppUiStore,
  );

  useEffectOnce(() => {
    store.fetchData();
  });

  const { appHeaderContainer } = appUi;

  return (
    <div className={props.className}>
      {appHeaderContainer && createPortal(<StatsHeader />, appHeaderContainer)}
        <div className={cn('w-full px-5 pt-3 flex items-center', css.header)}>
          <StatsFilters />
        </div>
      {/* <SizeSensor onSize={statsUi.setHeaderHeight}>
      </SizeSensor> */}
      <div
        className={cn('overflow-y-auto', css.body)}
        // style={{ height: statsUi.bodyHeight }}
      >
        <List
          loading={store.loading}
          dataSource={store.itemsView}
          renderItem={renderItem}
        />
      </div>
    </div>
  );
});
