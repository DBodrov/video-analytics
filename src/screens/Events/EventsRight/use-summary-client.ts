import React from 'react';
import {useFetch, TIMEZONE_OFFSET} from '@/utils';
import {useAuth} from '@/context';

export type TCount = {
  hour: number;
  incidents: number;
  events: number;
};

type State = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  error?: any;
  counts?: TCount[];
};

export function useSummaryClient() {
  const [state, setState] = React.useState<State>({status: 'idle', counts: undefined, error: undefined});
  const fetchClient = useFetch();
  const {companyId, accessToken} = useAuth();

  const queryEventsCounts = React.useCallback(() => {
    setState(s => ({...s, status: 'pending', error: undefined}));
    const headers = {Authorization: `Bearer ${accessToken}`};
    let url = `/api/va/companies/${companyId}/events/counts?tz_offset=${TIMEZONE_OFFSET}`;
    fetchClient(url, {headers}).then(
      response => {
        const counts = response.counts;
        setState(s => ({...s, status: 'resolved', counts}));
        return response;
      },
      error => {
        setState(s => ({...s, status: 'rejected', error}));
        //console.error(error);
        return error;
      },
    );
  }, [accessToken, companyId, fetchClient]);

  const eventsSummary = React.useMemo(() => {
    return state.counts?.reduce((eventsSum, count, idx) => {
      return eventsSum + count.events
    }, 0)
  }, [state.counts]);

  const incidentsSummary = React.useMemo(() => {
    return state.counts?.reduce((incidentsSum, count, idx) => {
      return incidentsSum + count.incidents
    }, 0)
  }, [state.counts])


  return {
    state,
    queryEventsCounts,
    eventsSummary,
    incidentsSummary
  };
}
