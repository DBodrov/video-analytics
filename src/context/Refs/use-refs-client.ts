import {useReducer, useCallback} from 'react';
import {useAuth} from '@/context/Auth';
import {useFetch} from '@/utils';
import {
  StatusesGetResponse200FromJSON,
  ChecksGetResponse200FromJSON,
  IncidentsGetResponse200,
} from '@/backend/auth';
import {TEventStatusList, TCheckList, TCheckCategoryList} from './types';

type TRefsState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  eventStatuses?: TEventStatusList;
  checks?: TCheckList;
  checkCategories?: TCheckCategoryList;
  incidentsRefs?: IncidentsGetResponse200[];
  error?: any;
};

const initialState: TRefsState = {
  status: 'idle',
  eventStatuses: undefined,
  checkCategories: undefined,
  checks: undefined,
  incidentsRefs: undefined,
  error: undefined,
};

export function useRefsClient() {
  const fetchClient = useFetch();
  const {accessToken} = useAuth();
  const [{status, eventStatuses, checks, checkCategories, error, incidentsRefs}, setRefsState] = useReducer(
    (s: TRefsState, a: TRefsState) => ({...s, ...a}),
    initialState,
  );

  const fetchRefsData = useCallback(() => {
    setRefsState({status: 'pending'});
    const headers = {Authorization: `Bearer ${accessToken}`};
    const fetchEventStatuses = fetchClient('/api/auth/refs/statuses', {headers});
    const fetchAllChecks = fetchClient('/api/auth/refs/checks', {headers});
    const fetchCheckCategories = fetchClient('/api/auth/refs/check_categories', {headers});
    const fetchRefsIncidents = fetchClient('/api/auth/refs/incidents', {headers});
    Promise.all([fetchEventStatuses, fetchAllChecks, fetchCheckCategories, fetchRefsIncidents]).then(
      response => {
        const [eventStatusesData, checksRawData, categoriesData, incidentsRefsResponse] = response;
        // console.log(eventStatusesData);
        const eventStatuses = StatusesGetResponse200FromJSON(eventStatusesData).statuses;
        const checksData = ChecksGetResponse200FromJSON(checksRawData);
        const checkCategories = categoriesData?.categories;
        //FIXME: Fix typings open api
        //const incidentsRefs = IncidentsGetResponse200FromJSON(incidentsRefsResponse);
        const incidentsRefs = incidentsRefsResponse.incidents;
        setRefsState({
          status: 'resolved',
          eventStatuses,
          checks: checksData.checks,
          checkCategories,
          incidentsRefs,
        });
      },
      error => {
        setRefsState({status: 'rejected', error});
      },
    );
  }, [accessToken, fetchClient]);

  const getEventStatusById = useCallback(
    (id?: number) => {
      return eventStatuses?.find(s => s?.id === id);
    },
    [eventStatuses],
  );

  const getCheckById = useCallback(
    (id: number) => {
      return checks?.find(c => c?.id === id);
    },
    [checks],
  );

  const getCheckCategoryById = useCallback(
    (id?: number) => {
      return Boolean(id) ? checkCategories?.find(c => c.id === id) : undefined;
    },
    [checkCategories],
  );

  const getCheckByIncidentCategoryId = useCallback(
    (categoryId: number) => {
      const checkId = incidentsRefs?.find(i => i.id === categoryId)?.checks[0].id;
      return checkId ? getCheckById(checkId) : undefined;
    },
    [getCheckById, incidentsRefs],
  );

  const getIncidentNameByCategoryId = useCallback(
    (categoryId: number) => {
      return incidentsRefs?.find(i => i.id === categoryId)?.name;
    },
    [incidentsRefs],
  );

  return {
    fetchRefsData,
    eventStatuses,
    checks,
    checkCategories,
    error,
    getEventStatusById,
    getCheckById,
    getCheckCategoryById,
    getCheckByIncidentCategoryId,
    getIncidentNameByCategoryId,

    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',
  };
}
