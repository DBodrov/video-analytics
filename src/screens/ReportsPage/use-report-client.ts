import React from 'react';
import {useAuth} from '@/context';
import {IReportsPostRequest, ReportsPostRequestToJSON} from './types';

export function useReportsClient() {
  const {companyId, authHeader} = useAuth();

  const getReportFile = React.useCallback(
    (query: IReportsPostRequest) => {
      const reportId = 2;
      const body = ReportsPostRequestToJSON(query);
      let filename = 'report.xlsx';

      window
        .fetch(`/api/va/companies/${companyId}/reports/${reportId}`, {
          body: JSON.stringify(body),
          headers: authHeader,
          method: 'POST',
        })
        .then(response => {
          const header = response.headers.get('content-disposition');
          if (header) {
            filename = header.split('filename=')[1];
          }
          return response.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = filename;
          link.click();
        });
    },
    [authHeader, companyId],
  );

  return {
    getReportFile,
  };
}
