import React from 'react';
import {useHistory} from 'react-router-dom';
import {useCompany, useAuth} from '@/context';
import {AppLayout} from '../Layouts';
import {VideoPreview} from './VideoPreview';
import {SensorInfo} from './SensorInfo';
import {useSensorsStats} from '../Events/EventsRight/use-sensors-stats';
import {SensorsTileList, Tile} from './styles';

export function Sensors() {
  const history = useHistory();
  const {companyId = 1} = useAuth();
  const {sensors} = useCompany();


  const {fetchSensorsStats, bySensor} = useSensorsStats();

  React.useEffect(() => {
    if (!bySensor) {
      fetchSensorsStats();
    }
  }, [bySensor, fetchSensorsStats])

  const readCounts = React.useCallback((sensorId: number) => {
    if (!sensors || !bySensor) return {incidentsSum: 0, eventsSum: 0};
    if (bySensor.hasOwnProperty(String(sensorId))) {
      return bySensor[String(sensorId)];
    }
    return {incidentsSum: 0, eventsSum: 0};
  }, [bySensor, sensors])

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
                incidentsCount={readCounts(sensor.ref.id).incidentsSum}
                eventsCount={readCounts(sensor.ref.id).eventsSum}
              />
            </Tile>
          );
        })}
      </SensorsTileList>
    </AppLayout>
  );
}
