import React from 'react';
import {useFetch, TIMEZONE_OFFSET} from '@/utils';
import {useAuth, getAccessToken} from '@/context';
import {
  CompanySensorGetResponse200FromJSON,
  CompanySensorStatsGetResponse200FromJSON,
} from '@/backend/main';
import {TSensor, TSensorStats} from './types';

type State = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  sensor?: TSensor;
  sensorStats?: TSensorStats[];
  error?: any;
};

export function useSensorClient() {
  const [sensorState, setSensor] = React.useState<State>({
    status: 'idle',
    error: undefined,
    sensor: undefined,
  });
  const {companyId, logout} = useAuth();
  const fetchClient = useFetch();

  const querySensorById = React.useCallback(
    (sensorId: number) => {
      setSensor(s => ({...s, status: 'pending', error: undefined}));
      const headers = {Authorization: `Bearer ${getAccessToken()}`};
      const fetchSensorInfo = fetchClient(`/api/va/companies/${companyId}/sensors/${sensorId}`, {headers});
      const fetchSensorStats = fetchClient(`/api/va/companies/${companyId}/sensors/${sensorId}/stats?tz_offset=${TIMEZONE_OFFSET}`, {
        headers,
      });
      Promise.all([fetchSensorInfo, fetchSensorStats]).then(
        response => {
          const [sensorInfo, sensorRawStats] = response;
          const sensorData = CompanySensorGetResponse200FromJSON(sensorInfo.sensor);
          const sensorStats = CompanySensorStatsGetResponse200FromJSON(sensorRawStats).stats;
          setSensor(s => ({...s, status: 'resolved', sensor: sensorData, sensorStats}));
        },
        error => {
          setSensor(s => ({...s, status: 'rejected', error}));
          if (error?.status_code === 401)
            logout();
        },
      );
    },
    [companyId, fetchClient,logout],
  );

  return {
    ...sensorState,
    querySensorById,
  };
}
