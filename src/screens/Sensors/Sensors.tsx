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
  const {lists, queryEventsByCurrentDay} = useSensorsClient();

  React.useEffect(() => {
    if (!lists) {
      // queryEventsByCurrentDay();
    }
  }, [lists, queryEventsByCurrentDay]);

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
        {sensors?.map(sensor => {
          return (
            <Tile key={sensor.ref.id} onClick={() => history.push(`/sensors/${sensor.ref.id}`)}>
              <VideoPreview companyId={companyId} sensorId={sensor.ref.id} />
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
