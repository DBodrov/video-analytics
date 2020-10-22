import React from 'react';
import {useParams} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {useEvents, TEventView, useAuth} from '@/context';
import {BoxToggle} from '@/components';
import {HOST} from '@/utils';
import {AppLayout} from '../Layouts';
import {EventsTable} from '../Events/EventsTable';
import {CameraBox, CameraInfoBox} from './styles';

export function SensorDetails() {
  const [events, setEvents] = React.useState<TEventView[] | undefined>(undefined);
  const [showBoxes, setShowBoxes] = React.useState(true);
  const {companyId} = useAuth();
  const {id} = useParams<{id: string}>();
  const {getEventsViewBySensorId, isError, isIdle, isLoading, isSuccess, error} = useEvents();
  const videoUrl = React.useMemo(
    () =>
      `http://${uuidv4()}.video.${HOST}/api/live/company/${companyId}/sensors/${id}${
        showBoxes ? '/boxes' : ''
      }`,
    [companyId, id, showBoxes],
  );

  //TODO: Убрать внутрь EventsTable, в отдельный client-hook
  React.useEffect(() => {
    if (!events && Number(id)) {
      const eventsView = getEventsViewBySensorId(Number(id))?.slice(0, 50);
      setEvents(eventsView);
    }
  }, [events, getEventsViewBySensorId, id]);
  return (
    <AppLayout>
      <div css={{width: '100%', height: '100%', padding: '30px 30px'}}>
        <CameraBox>
          <div css={{position: 'relative'}}>
            <BoxToggle showBox={showBoxes} onToggle={() => setShowBoxes(!showBoxes)} />
            <img src={videoUrl} alt="" width="100%" height="100%" />
          </div>
          <CameraInfoBox>
            <div>Info</div>
          </CameraInfoBox>
        </CameraBox>
        <EventsTable
          isError={isError}
          isIdle={isIdle}
          isLoading={isLoading}
          isSuccess={isSuccess}
          error={error}
          eventsView={events}
        />
      </div>
    </AppLayout>
  );
}
