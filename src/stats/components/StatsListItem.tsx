import { List } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StatsItem } from '../stats-types';
import { StatsAvatar } from './StatsAvatar';

interface Props {
  item: StatsItem;
  className?: string;
}

export const StatsListItem: React.FC<Props> = observer(({ item, ...props }) => {
  const date = item.lastUpdateDateF;
  const description = `${item.sensor} | Обновление${
    date ? ' ' : ': '
  }${item.lastUpdateDateF ?? 'нет данных'}`;

  return (
    <List.Item>
      <List.Item.Meta
        avatar={<StatsAvatar image={item.image} />}
        title={item.category}
        description={description}
      />
    </List.Item>
  );
});
