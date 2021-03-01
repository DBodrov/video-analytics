import React from 'react';
import {PipelineChecksGetResponse200FromJSON} from '@/backend/main';
import {useFetch} from '@/utils';
import {useAuth} from '@/context';
import {TPipelineChecks} from './types';

type TRulesState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  pipelineChecks?: TPipelineChecks;
};

const initState: TRulesState = {
  status: 'idle',
  pipelineChecks: undefined,
};

const rulesReducer = (state: TRulesState, changes: Partial<TRulesState>) => {
  // console.log('changes', changes)
  return {
    ...state,
    ...changes,
  };
};

export function useRulesClient() {
  const {companyId, authHeader} = useAuth();
  const fetchClient = useFetch();

  const [{status, pipelineChecks}, dispatch] = React.useReducer(rulesReducer, initState);

  const fetchRulesByTemplateId = React.useCallback(
    (templateId: number) => {
      dispatch({status: 'pending'});
      fetchClient(`/api/va/companies/${companyId}/pipelines/${templateId}/checks`, {
        method: 'GET',
        headers: authHeader,
      }).then(
        response => {
          const pipelineChecks = PipelineChecksGetResponse200FromJSON(response).checks;
          dispatch({status: 'resolved', pipelineChecks});
        },
        error => {
          dispatch({status: 'rejected'});
        },
      );
    },
    [authHeader, companyId, fetchClient],
  );

  const updateRule = React.useCallback(
    (pipelineId: number, checkId: number, enabled: boolean) => {
      dispatch({status: 'pending'});
      fetchClient(`/api/va/companies/${companyId}/pipelines/${pipelineId}/checks/${checkId}`, {
        method: 'PATCH',
        headers: authHeader,
        body: {enabled},
      }).then(
        response => {
          fetchRulesByTemplateId(pipelineId);
          //dispatch({status: 'resolved'});
        },
        error => {
          dispatch({status: 'rejected'});
        },
      );
    },
    [authHeader, companyId, fetchClient, fetchRulesByTemplateId],
  );

  return {
    fetchRulesByTemplateId,
    pipelineChecks,
    updateRule,
  };
}
