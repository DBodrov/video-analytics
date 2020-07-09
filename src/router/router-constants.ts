import { EnumLike } from '@/common/types/helpers-types';
import { RouteProps } from 'react-router';
import { Except } from 'type-fest';
import { RouteName } from './router-types';

export const ROUTE_NAMES_ARRAY = ['home', 'dashboard', 'stats', 'events'] as const;

type RoutePropsX = Except<RouteProps, 'path'> & {
  path: string;
  title?: string;
};

export const ROUTE_NAMES: EnumLike<RouteName> = {
  home: 'home',
  dashboard: 'dashboard',
  stats: 'stats',
  events: 'events',
};

export const ROUTES: Record<RouteName, RoutePropsX> = {
  home: { path: '/', exact: true },
  dashboard: { path: '/dashboard', title: 'Дашборд' },
  stats: { path: '/stats', title: 'Подсчёт ТС' },
  events: {path: '/events', title: 'События'}
};
