import React, {useEffect, useMemo, createContext, useContext} from 'react';
import {useRefsClient} from './use-refs-client';
import {TRefsContext} from './types';

export const RefsContext = createContext<TRefsContext | undefined>(undefined);

export function RefsProvider(props: any) {
  const {
    eventStatuses,
    fetchRefsData,
    checks,
    checkCategories,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    getCheckById,
    getCheckCategoryById,
    getEventStatusById,
    getCheckByIncidentCategoryId,
    getIncidentNameByCategoryId,
  } = useRefsClient();

  useEffect(() => {
    if (!eventStatuses) {
      fetchRefsData();
    }
  }, [eventStatuses, fetchRefsData]);

  const ctxValue = useMemo<TRefsContext>(
    () => ({
      eventStatuses,
      checks,
      checkCategories,
      getCheckById,
      getCheckCategoryById,
      getEventStatusById,
      getCheckByIncidentCategoryId,
      getIncidentNameByCategoryId,
    }),
    [
      checkCategories,
      checks,
      eventStatuses,
      getCheckById,
      getCheckByIncidentCategoryId,
      getCheckCategoryById,
      getEventStatusById,
      getIncidentNameByCategoryId,
    ],
  );
  if (isIdle || isLoading) {
    return <span>Загрузка ресурсов...</span>;
  }
  if (isSuccess) {
    return <RefsContext.Provider value={ctxValue} {...props} />;
  }
  if (isError) {
    return <span>{error.message}</span>;
  }
  return <span>Unknown status</span>;
}

export const useRefs = () => {
  const ctx = useContext(RefsContext);
  if (!ctx) {
    throw new Error('useRefs must be used within a RefsProvider');
  }
  return ctx;
};
