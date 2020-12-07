import React from 'react';
import {useFetch} from '@/utils';
import {useAuth} from '@/context';
import {CompanySensorGetResponse200FromJSON} from '@/backend/main';
import {TSensor} from './types';

type State = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  sensor?: TSensor;
  error?: any;
}

export function useSensorClient() {

  const [sensorState, setSensor] = React.useState<State>({status: 'idle', error: undefined, sensor: undefined});
  const {authHeader, companyId} = useAuth();
  const fetchClient = useFetch();

  const querySensorById = React.useCallback((sensorId: number) => {
    setSensor(s => ({...s, status: 'pending', error: undefined}));
    const headers = authHeader;
    fetchClient(`/api/va/companies/${companyId}/sensors/${sensorId}`, {headers}).then(
      response => {
        const sensorData = CompanySensorGetResponse200FromJSON(response);
        setSensor(s => ({...s, status: 'resolved', sensor: sensorData}));
      },
      error => {
        setSensor(s => ({...s, status: 'rejected', error}));
      },
    );
  }, [authHeader, companyId, fetchClient]);

  return {
    sensorState,
    querySensorById
  }
}
