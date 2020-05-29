import Button, { ButtonProps } from 'antd/lib/button';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Except } from 'type-fest';
import css from './ButtonSuccess.less';

type Props = Except<ButtonProps & React.RefAttributes<HTMLElement>, 'type'>;

export const ButtonSuccess: React.FC<Props> = observer(
  (props, ref?: React.Ref<HTMLElement>) => {
    return (
      <Button {...props} className={cn(css.it, props.className)} ref={ref} />
    );
  },
  { forwardRef: true },
);
