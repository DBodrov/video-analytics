import React from 'react';
import {useParams} from 'react-router-dom';
import {DetailsLayout} from '@/screens/Layouts';
import {useEventClient} from './use-event-client';
import {EventSection} from './EventSection';
import {Timeline} from './Timeline';
import {EventContent} from './styles';

export function EventDetails() {
  const {id} = useParams();
  const {
    isIdle,
    isLoading,
    isError,
    fetchEvent,
    eventData,
    imageContent,
    boxRect,
    detectInfo,
    error,
  } = useEventClient();

  React.useEffect(() => {
    if (!eventData) {
      fetchEvent(id);
    }
  }, [eventData, fetchEvent, id]);

  const renderEventSection = () => {
    if (isIdle || isLoading) {
      return <span>Загрузка события {id}</span>;
    }
    if (isError) {
      return <span css={{color: 'var(--color-mts)'}}>{error.message}</span>;
    }
    return <EventSection boxRect={boxRect} imageContent={imageContent} detectInfo={detectInfo} />;
  };

  const renderPlayer = () => {
    return <div css={{width: '100%', height: 55, backgroundColor: 'var(--color-form)'}}></div>;
  };

  return (
    <DetailsLayout>
      <EventContent>
        <div css={{width: '100%'}}>
          {renderEventSection()}
          {renderPlayer()}
          <Timeline />
        </div>
        <div></div>
      </EventContent>
    </DetailsLayout>
  );
}
