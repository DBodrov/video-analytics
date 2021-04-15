import React from 'react';
import {useFetch} from '@/utils';
import {useAuth} from '@/context';
import {useSettings} from '../SettingsContext';
import {TPolygons} from '../types';

export function useMarkupClient() {
  const [status, setStatus] = React.useState('idle');
  const {companyId, authHeader} = useAuth();
  const {currentTemplateId, currentSensorsIds, currentChecksIds} = useSettings();
  const fetchClient = useFetch();

  const savePolygons = React.useCallback(
    (polygons: TPolygons) => {
      if (currentSensorsIds && currentChecksIds) {
        setStatus('pending');
        const updaters = currentChecksIds
          .map(checkId => {
            return currentSensorsIds.map(sensorId => {
              return `/api/va/companies/${companyId}/pipelines/${currentTemplateId}/sensors/${sensorId}/checks/${checkId}`;
            });
          })
          .flat()
          .map(url => {
            return fetchClient(url, {
              method: 'PATCH',
              headers: authHeader,
              body: {
                enabled: true,
                extra: {},
                markup: {
                  polygons,
                },
              },
            });
          });

        Promise.all(updaters).then(
          () => {
            setStatus('resolved');
          },
          () => {
            setStatus('rejected');
          },
        );
      }
    },
    [authHeader, companyId, currentChecksIds, currentSensorsIds, currentTemplateId, fetchClient],
  );

  return {savePolygons, status};
}
