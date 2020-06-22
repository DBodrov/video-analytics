import { SvgCamera } from '@/assets/icons/SvgCamera';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import css from './Logo.less';

export const Logo: React.FC = observer(props => {
  return (
    <div className="flex items-center">
      <SvgCamera className="mr-4" />
      <div className={cn('mr-1', css.title)}>Video AI</div>
      <div className={cn('text-xs self-start mt-1', css.mts)}>mts</div>
    </div>
  );
});
