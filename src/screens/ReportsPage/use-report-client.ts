import React, {useState} from 'react';
import {useAuth, getAccessToken} from '@/context';
import {IReportsPostRequest, ReportsPostRequestToJSON} from './types';

export function useReportsClient() {
  const {companyId, logout} = useAuth();

  const [status, setStatus] = useState('')

  const getReportFile = React.useCallback(
    (query: IReportsPostRequest) => {
      const reportId = 2;
      const body = ReportsPostRequestToJSON(query);
      let filename = 'report.xlsx';
      setStatus('Загрузка...')
      window
        .fetch(`/api/va/companies/${companyId}/reports/${reportId}`, {
          body: JSON.stringify(body),
          headers: {Authorization: `Bearer ${getAccessToken()}`},
          method: 'POST',
        })
        .then(response => {
          const header = response.headers.get('content-disposition');
          setStatus('Загружен')
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
        }).catch(error => {
          setStatus('Ошибка загрузки')
          if (error?.status_code === 401)
            logout();
          return error
        });
    },
    [companyId,logout],
  );

  return {
    getReportFile,
    status
  };
}
