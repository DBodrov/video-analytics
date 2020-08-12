import React, {useEffect, useMemo, createContext, useContext} from 'react';
import {useCompanyClient} from './use-company-client';
import {ICompanyContext} from './types';

export const CompanyContext = createContext<ICompanyContext | undefined>(undefined);

export function CompanyProvider({children}: {children: React.ReactNode}) {
  const {
    fetchData,
    locations,
    sensors,
    isError,
    isIdle,
    error,
    isLoading,
    isSuccess,
    getLocationById,
    getSensorById,
  } = useCompanyClient();

  useEffect(() => {
    if (!locations || !sensors) {
      fetchData();
    }
  }, [fetchData, locations, sensors]);
  const value = useMemo<ICompanyContext>(() => ({locations, sensors, getLocationById, getSensorById}), [
    getLocationById,
    getSensorById,
    locations,
    sensors,
  ]);

  if (isIdle || isLoading) return <span>Загрузка ресурсов...</span>;
  if (isSuccess) {
    return <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>;
  }
  if (isError) {
    return <span>{error?.message}</span>;
  }
  return <span>Unknown status</span>;
}

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
};
