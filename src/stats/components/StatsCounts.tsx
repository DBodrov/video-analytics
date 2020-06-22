import { Typography } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StatsItem } from '../stats-types';
import css from './StatsCounts.less';
const { Paragraph } = Typography;

interface Props {
  item: StatsItem;
  className?: string;
}

export const StatsCounts: React.FC<Props> = observer(({ item, ...props }) => {
  return (
    <div className={cn('flex-col justify-start', props.className)}>
      <div className={css.data}>
        <span>{item.inCount}</span>
        <span>{' - '}</span>
        <span>{item.outCount}</span>
      </div>
      <Paragraph type="secondary" className={cn(css.description)}>
        Заехало - Выехало
      </Paragraph>
    </div>
  );
});
