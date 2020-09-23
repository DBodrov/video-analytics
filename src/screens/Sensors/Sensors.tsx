import React from 'react';
import {useCompany, useAuth} from '@/context';
import {AppLayout} from '../Layouts';
import {VideoPreview} from './VideoPreview';
import {SensorInfo} from './SensorInfo';
import {SensorsTileList, Tile} from './styles';

export function Sensors() {
  const {companyId = 1} = useAuth();
  const {sensors} = useCompany();

  return (
    <AppLayout>
      <SensorsTileList>
        {sensors?.map(sensor => {
          return (
            <Tile key={sensor.id}>
              <VideoPreview companyId={companyId} sensorId={sensor.id} />
              <SensorInfo sensor={sensor} />
            </Tile>
          );
        })}
      </SensorsTileList>
    </AppLayout>
  );
}
