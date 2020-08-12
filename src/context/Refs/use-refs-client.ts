import {useReducer, useCallback} from 'react';
import {useAuth} from '@/context/Auth';
import {useFetch} from '@/utils';
import {StatusesGetResponse200FromJSON, ChecksGetResponse200FromJSON} from '@/backend/auth';
import {TEventStatusList, TCheckList, TCheckCategoryList} from './types';

type TRefsState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  eventStatuses?: TEventStatusList;
  checks?: TCheckList;
  checkCategories?: TCheckCategoryList;
  error?: any;
};

const initialState: TRefsState = {
  status: 'idle',
  eventStatuses: undefined,
  checkCategories: undefined,
  checks: undefined,
  error: undefined,
};

export function useRefsClient() {
  const fetchClient = useFetch();
  const {accessToken} = useAuth();
  const [{status, eventStatuses, checks, checkCategories, error}, setRefsState] = useReducer(
    (s: TRefsState, a: TRefsState) => ({...s, ...a}),
    initialState,
  );

  const fetchRefsData = useCallback(() => {
    setRefsState({status: 'pending'});
    const headers = {Authorization: `Bearer ${accessToken}`};
    const fetchEventStatuses = fetchClient('/api/auth/refs/statuses', {headers});
    const fetchAllChecks = fetchClient('/api/auth/refs/checks', {headers});
    const fetchCheckCategories = fetchClient('/api/auth/refs/check_categories', {headers});
    Promise.all([fetchEventStatuses, fetchAllChecks, fetchCheckCategories]).then(
      response => {
        const [eventStatusesData, checksRawData, categoriesData] = response;
        // console.log(eventStatusesData);
        const eventStatuses = StatusesGetResponse200FromJSON(eventStatusesData).statuses;
        const checksData = ChecksGetResponse200FromJSON(checksRawData);
        const checkCategories = categoriesData?.categories;
        setRefsState({status: 'resolved', eventStatuses, checks: checksData.checks, checkCategories});
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
    (id: number) => {
      return checkCategories?.find(c => c.id === id);
    },
    [checkCategories],
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

    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',
  };
}
