import React from 'react';
import {useHistory} from 'react-router-dom';
import {useCompany, useAuth} from '@/context';
import {AppLayout} from '../Layouts';
import {VideoPreview} from './VideoPreview';
import {SensorInfo} from './SensorInfo';
import {useSensorsClient} from './use-sensors-client';
import {SensorsTileList, Tile} from './styles';

export function Sensors() {
  const history = useHistory();
  const {companyId = 1} = useAuth();
  const {sensors} = useCompany();
  const {lists} = useSensorsClient();

  const getCounts = React.useCallback(
    (sensorId: number) => {
      return {
        incidents:
          lists?.incidentsList?.filter(event => event.sensorId === sensorId && event.incident).length ?? 0,
        events:
          lists?.eventsList?.filter(event => event.sensorId === sensorId && !event.incident).length ?? 0,
      };
    },
    [lists?.eventsList, lists?.incidentsList],
  );

  return (
    <AppLayout>
      <SensorsTileList>
        {sensors && sensors.map(sensor => {
          return (
            <Tile
              css={{cursor: sensor!.metrics!.activeCheckIds!.length > 0 ? 'pointer' : 'not-allowed'}}
              key={sensor.ref.id}
              onClick={
                sensor!.metrics!.activeCheckIds!.length > 0 ? () => history.push(`/sensors/${sensor.ref.id}`) : undefined
              }
            >
              <VideoPreview companyId={companyId} sensorId={sensor.ref.id} status={sensor.status} />
              <SensorInfo
                sensor={sensor}
                incidentsCount={getCounts(sensor.ref.id).incidents}
                eventsCount={getCounts(sensor.ref.id).events}
              />
            </Tile>
          );
        })}
      </SensorsTileList>
    </AppLayout>
  );
}
