import React from 'react';
import {useParams} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {Button} from 'neutrino-ui';
import {useAuth} from '@/context';
import {useEventsClient} from '@/context/Events/use-events-client';
import {BoxToggle} from '@/components';
import {HOST} from '@/utils';
import {AppLayout} from '../Layouts';
import {EventsTable} from '../Events/EventsTable';
import {TIMEZONE_OFFSET} from '@/utils';
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
  }
};

export function SensorDetails() {
  const [showBoxes, setShowBoxes] = React.useState(true);
  const {companyId} = useAuth();
  const {id} = useParams<{id: string}>();
  const {queryEvents, isError, isIdle, isLoading, isSuccess, error, eventsView} = useEventsClient();
  const videoUrl = React.useMemo(
    () =>
      `http://${uuidv4()}.video.${HOST}/api/live/company/${companyId}/sensors/${id}${
        showBoxes ? '/boxes' : ''
      }`,
    [companyId, id, showBoxes],
  );

  React.useEffect(() => {
    if (eventsView?.length === 0 && !isSuccess) {
      const today = allDay();
      queryEvents({sensorIds: Number(id), tzOffset: TIMEZONE_OFFSET, startTime: today.beginDay, endTime: today.endDay, page: 1, pageSize: 50});
    }
  }, [eventsView, id, isSuccess, queryEvents]);

  return (
    <AppLayout>
      <div css={{width: '100%', height: '100%', padding: '30px 30px'}}>
        <CameraBox>
          <div css={{position: 'relative'}}>
            <BoxToggle showBox={showBoxes} onToggle={() => setShowBoxes(!showBoxes)} />
            <img src={videoUrl} alt="" width="100%" height="100%" />
          </div>
          <CameraInfoBox>
            <TechInfo />
            <DayStats />
            <ActiveChecks />
            <div css={{paddingLeft: 30}}>
              <Button flat variant="primary" css={{width: 170, fontSize: 14}}>
                Редактировать камеру
              </Button>
            </div>
          </CameraInfoBox>
        </CameraBox>
        <EventsTable
          isError={isError}
          isIdle={isIdle}
          isLoading={isLoading}
          isSuccess={isSuccess}
          error={error}
          eventsView={eventsView}
        />
      </div>
    </AppLayout>
  );
}
