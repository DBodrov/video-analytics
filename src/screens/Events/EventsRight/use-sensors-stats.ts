import React from 'react';
import {useFetch, TIMEZONE_OFFSET} from '@/utils';
import {useAuth, useCompany, getAccessToken} from '@/context';
import {CompanySensorStatsGetResponse200FromJSON} from '@/backend/main';
import {groupByIdAndHours, sumCountsBySensor, sumTotalStats, countAllIncidentsByHours} from './utils';
import {TSensorsStatsState} from './types'

export function useSensorsStats() {
  const [{status, counts, error}, setState] = React.useState<TSensorsStatsState>({
    status: 'idle',
    counts: undefined,
    error: undefined,
  });
  const fetchClient = useFetch();
  const {companyId, logout} = useAuth();
  const {sensors} = useCompany();

  const fetchSensorsStats = React.useCallback(() => {
    setState(s => ({...s, status: 'pending', error: undefined}));
    const headers = {Authorization: `Bearer ${getAccessToken()}`};
    const sensorsIds = sensors?.map(s => s.ref.id);
    sensorsIds?.forEach(sensorId => {
      let url = `/api/va/companies/${companyId}/sensors/${sensorId}/stats?tz_offset=${TIMEZONE_OFFSET}`;
      fetchClient(url, {headers}).then(
        response => {
          const {stats} = CompanySensorStatsGetResponse200FromJSON(response);
          const updateCounts = {[sensorId]: stats};
          setState(s => ({...s, status: 'resolved', counts: {...s.counts, ...updateCounts}}));
          return response;
        },
        error => {
          setState(s => ({...s, status: 'rejected', error}));
          //console.error(error);
          if (error?.status_code === 401)
            logout();
          return error;
        },
      );
    });
  }, [companyId, fetchClient, sensors, logout]);

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',
    fetchSensorsStats,
    counts,
    error,

    byHours: React.useMemo(() => groupByIdAndHours(counts), [counts]),
    bySensor: React.useMemo(() => sumCountsBySensor(counts), [counts]),
    totalStats: React.useMemo(() => sumTotalStats(counts), [counts]),
    totalIncidents: React.useMemo(() => countAllIncidentsByHours(counts), [counts])
  };
}
