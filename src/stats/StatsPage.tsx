import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import css from './StatsPage.less';

interface Props {
  className?: string;
}

export const StatsPage: React.FC<Props> = observer(props => {
  return (
    <div className={cn(css.container, props.className)}>
      Component body here
    </div>
  );
});
