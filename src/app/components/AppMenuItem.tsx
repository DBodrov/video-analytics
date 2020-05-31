import { ROUTES } from '@/router/router-constants';
import { RouterStore } from '@/router/router-store';
import { RouteName } from '@/router/router-types';
import { useInject } from '@/store/use-inject';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import css from './AppMenuItem.less';

interface Props {
  routeName: RouteName;
  icon: React.ReactNode;
  className?: string;
}

export const AppMenuItem: React.FC<Props> = observer(
  ({ routeName, ...props }) => {
    const [{ activeRoute }] = useInject(RouterStore);
    const isActive = routeName === activeRoute;

    return (
      <Link
        to={ROUTES[routeName].path}
        className={cn(
          'flex items-center px-8 mb-5 relative',
          css.it,
          isActive && css.it_active,
          props.className,
        )}
      >
        <div
          className={cn(
            'absolute inset-y-0 left-0 h-full',
            isActive ? 'block' : 'hidden',
            css.activeMarker,
          )}
        />
        {props.icon}
        <span className={cn('ml-4 font-semibold', css.text)}>
          {ROUTES[routeName].title}
        </span>
      </Link>
    );
  },
);
