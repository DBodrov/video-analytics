import React from 'react';
import {useParams} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {Button} from 'neutrino-ui';
import {useAuth, useRefs} from '@/context';
import {useEventsClient} from '@/context/Events/use-events-client';
import {BoxToggle} from '@/components';
import {HOST, TIMEZONE_OFFSET} from '@/utils';
import {AppLayout} from '../Layouts';
import {EventsTable} from '../Events/EventsTable';
import {Tag} from '../Sensors/styles';
import {statusColor} from '../Sensors/types';
import {useSensorClient} from './use-sensor-client';
import {DayStats, TechInfo, ActiveChecks} from './components';
import {CameraBox, CameraInfoBox} from './styles';

const allDay = () => {
  let startTime = new Date();
  startTime.setHours(0, 0, 0, 0);
  const isoStart = startTime.toISOString();
  let endTime = new Date();
  endTime.setHours(23, 59, 59, 999);
  const isoEnd = endTime.toISOString();
  return {
    beginDay: isoStart,
    endDay: isoEnd,
  };
};

export function SensorDetails() {
  const [showBoxes, setShowBoxes] = React.useState(true);

  const {companyId} = useAuth();
  const {id} = useParams<{id: string}>();
  const {queryEvents, error, eventsView, status} = useEventsClient();
  const {querySensorById, status: sensorStatus, sensor, sensorStats} = useSensorClient();
  const {getCheckById} = useRefs();
  const videoUrl = React.useMemo(
    () =>
      `http://${uuidv4()}.video.${HOST}/api/live/company/${companyId}/sensors/${id}${
        showBoxes ? '/boxes' : ''
      }`,
    [companyId, id, showBoxes],
  );

  React.useEffect(() => {
    if (eventsView?.length === 0 && status === 'idle') {
      const today = allDay();
      queryEvents({
        sensorIds: Number(id),
        tzOffset: TIMEZONE_OFFSET,
        dates: [today.beginDay, today.endDay],
        page: 1,
        pageSize: 50,
      });
    }
    if (!sensor && sensorStatus === 'idle') {
      querySensorById(Number(id));
    }
  }, [eventsView, id, queryEvents, querySensorById, status, sensor, sensorStatus]);

  const readCheckList = React.useCallback(() => {
    if (sensor) {
      const checkIds = sensor.metrics.activeCheckIds;
      if (checkIds) {
        return checkIds.map(getCheckById);
      }
    }
  }, [getCheckById, sensor]);

  const statusCode = sensor?.status.code ?? 'unknown';

  return (
    <AppLayout>
      <div css={{width: '100%', height: '100%', padding: '30px 30px'}}>
        <CameraBox>
          <div css={{position: 'relative'}}>
            <BoxToggle showBox={showBoxes} onToggle={() => setShowBoxes(!showBoxes)} />
            <img src={videoUrl} alt="" width="100%" height="100%" />
            <Tag
              css={{position: 'absolute', bottom: 10, right: 10, backgroundColor: statusColor[statusCode]}}
            >
              {sensor?.status.name}
            </Tag>
          </div>
          <CameraInfoBox>
            <TechInfo sensor={sensor} />
            <DayStats stats={sensorStats} />
            <ActiveChecks checkList={readCheckList()} />
            <div css={{paddingLeft: 30, paddingTop: 18}}>
              <Button flat variant="primary" css={{width: 170, fontSize: 14}}>
                Редактировать камеру
              </Button>
            </div>
          </CameraInfoBox>
        </CameraBox>
        <EventsTable status={status} error={error} eventsView={eventsView} />
      </div>
    </AppLayout>
  );
}
