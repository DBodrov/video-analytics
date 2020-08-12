import React, {useContext, useMemo, createContext} from 'react';
import {useLocation} from 'react-router-dom';

export const UIContext = createContext(null);

const routeMap = new Map([
  ['/', 'Дашборд'],
  ['/events', 'События'],
]);

export function UIProvider(props: any) {
  const {pathname} = useLocation();
  const contextValue = useMemo(() => ({title: routeMap.get(pathname)}), [pathname])
  return <UIContext.Provider value={contextValue} {...props}/>
}

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return ctx;
}
