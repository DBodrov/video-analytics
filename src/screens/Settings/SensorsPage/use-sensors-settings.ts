import React from 'react';
import {useFetch} from '@/utils';
import {useAuth} from '@/context';
import {useSettings} from '../SettingsContext';

export function useSensorsSettings() {
  const {companyId, authHeader} = useAuth();
  const fetchClient = useFetch();
  const {fetchPipelines, currentChecksIds, currentSensorsIds, currentTemplateId} = useSettings();

  const toggleSensor = React.useCallback(
    (sensorId: number, isEnabled: boolean) => {
      if (currentChecksIds) {
        const updaters = currentChecksIds.map(checkId => {
          return fetchClient(
            `/api/va/companies/${companyId}/pipelines/${currentTemplateId}/sensors/${sensorId}/checks/${checkId}`,
            {
              method: 'PATCH',
              headers: authHeader,
              body: {
                enabled: isEnabled,

              },
            },
          );
        });

        Promise.all(updaters).then(
          () => {
            fetchPipelines();
          },
          error => console.log(error),
        );
      }
    },
    [authHeader, companyId, currentChecksIds, currentTemplateId, fetchClient, fetchPipelines],
  );

  return {
    toggleSensor
  }
}
