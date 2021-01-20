import React from 'react';
import {useAuth} from '@/context';
import {useFetch} from '@/utils';

export function useReportsClient() {
  const fetchClient = useFetch();
  const {companyId, authHeader} = useAuth();

  const getReportFile = React.useCallback(
    (query: any) => {
      const reportId = 2;
      const body: any = {};
      Object.keys(query).filter(p => Boolean(query[p])).forEach(param => body[param] = query[param]);

      fetchClient(`/companies/${companyId}/reports/${reportId}`, {
        headers: authHeader,
        body,
      }).then(
        response => {
          return response;
        },
        error => error,
      );
    },
    [authHeader, companyId, fetchClient],
  );

  return {
    getReportFile,
  };
}
