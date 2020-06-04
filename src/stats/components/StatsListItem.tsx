import { List } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StatsItem } from '../stats-types';
import { StatsAvatar } from './StatsAvatar';
import { StatsCounts } from './StatsCounts';
import { StatsItemDescription } from './StatsItemDescription';

interface Props {
  item: StatsItem;
  className?: string;
}

export const StatsListItem: React.FC<Props> = observer(({ item, ...props }) => {
  return (
    <List.Item extra={<StatsCounts item={item} />}>
      <List.Item.Meta
        avatar={<StatsAvatar image={item.image} />}
        title={item.category}
        description={<StatsItemDescription item={item} />}
      />
    </List.Item>
  );
});
