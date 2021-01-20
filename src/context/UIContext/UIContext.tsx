import React, {useContext, createContext} from 'react';
import {useRouteMatch} from 'react-router-dom';

export const UIContext = createContext(null);

const routeMap = new Map([
  ['/', 'Дашборд'],
  ['/events', 'События'],
  ['/sensors', 'Все камеры'],
  ['/sensors/:id', 'Все камеры'],
  ['/reports', 'Отчеты'],
]);

export function UIProvider(props: any) {
  const dashboard = useRouteMatch({path: '/', exact: true});
  const events = useRouteMatch({path: '/events', exact: true});
  const sensors = useRouteMatch({path: '/sensors', exact: true});
  const sensorDetails = useRouteMatch({path: '/sensors/:id', exact: true});
  const reports = useRouteMatch({path: '/reports', exact: true})
  const currentPath = [dashboard, events, sensors, sensorDetails, reports].find(match => match !== null)?.path ?? '/';
  const title = routeMap.get(currentPath);
  const contextValue = {title};
  return <UIContext.Provider value={contextValue} {...props} />;
}

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return ctx;
};
