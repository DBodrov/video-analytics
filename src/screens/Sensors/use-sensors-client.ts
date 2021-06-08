import React from 'react';
import {EventsGetResponse200FromJSON} from '@/backend/main';
import {useAuth, getAccessToken, TEvents} from '@/context';
import {useFetch, TIMEZONE_OFFSET} from '@/utils';

export function useSensorsClient() {
  const [lists, setLists] = React.useState<{incidentsList: TEvents; eventsList: TEvents} | undefined>(
    undefined,
  );
  const fetchClient = useFetch();
  const {companyId} = useAuth();

  const queryEventsByCurrentDay = React.useCallback(() => {
    const headers = {Authorization: `Bearer ${getAccessToken()}`};
    let url = `/api/va/companies/${companyId}/events?tz_offset=${TIMEZONE_OFFSET}&sort_by=asc&page_size=10000`;
    fetchClient(url, {headers}).then(
      response => {
        const {events} = EventsGetResponse200FromJSON(response);
        const incidentsList = events.filter(e => e.incident);
        const eventsList = events.filter(e => !e.incident);
        setLists({incidentsList, eventsList});
        return response;
      },
      error => {
        //console.error(error);
        return error;
      },
    );
  }, [companyId, fetchClient]);

  return {
    lists,
    queryEventsByCurrentDay,
  };
}
