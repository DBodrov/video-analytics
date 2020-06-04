import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StatsItem } from '../stats-types';

interface Props {
  item: StatsItem;
  className?: string;
}

export const StatsItemDescription: React.FC<Props> = observer(
  ({ item, ...props }) => {
    return (
      <div className={cn('whitespace-pre', props.className)}>
        {item.sensor}
        {'  |  Обновление'}
        {item.lastUpdateDateF ? ' ' : ': '}
        {item.lastUpdateDateF ?? ': нет данных'}
        {'\n'}
        объект: {item.trackedObjectNumber ?? 'нет данных'}
      </div>
    );
  },
);
