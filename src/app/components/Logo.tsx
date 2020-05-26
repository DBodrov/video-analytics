import { SvgCamera } from '@/assets/icons/Camera';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import css from './Logo.less';

export const Logo: React.FC = observer(props => {
  return (
    <div className="flex items-center">
      <SvgCamera className="mr-4" />
      <div className="text-2xl mr-1">Video AI</div>
      <div className={cn('text-xs self-start mt-1', css.mts)}>mts</div>
    </div>
  );
});
