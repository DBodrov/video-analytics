import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {HoursScale} from './HoursScale';
import {ImagesLine} from './ImagesLine';
import {EventCounters} from './EventCounters';
import {TOccurrenceByHours, TOccurrenceData} from '../types';
import {TimelineTable} from './styles';
import {useTimelines} from '../TimelineContext';

type TimelineProps = {
  eventData?: TOccurrenceData;
  events?: TOccurrenceByHours;
  incidents?: TOccurrenceByHours;
  eventsCount?: number[];
  incidentsCount?: number[];
  viewType?: 'events' | 'incidents';
};

export function Timeline({
  eventData,
  events,
  incidents,
  eventsCount,
  incidentsCount,
  viewType = 'events',
}: TimelineProps) {
  const history = useHistory();
  const [currentHour, setCurrentHour] = useState<number>(new Date(eventData?.date!).getHours())
  const { setIdleStatus } = useTimelines()


  useEffect(()=>{
    console.log(eventData?.date)
    let hour = new Date(eventData?.date!).getHours()
    setCurrentHour(hour)
  },[eventData])


  const handleShowEvents = React.useCallback(
    (hour: number, isIncident: boolean) => {
      let id;
      let viewType;
      if (isIncident && hour >= 0) {
        id = String(incidents![hour][0].id);
        viewType = 'incidents';
      } else if (!isIncident && hour >= 0) {
        id = events![hour][0].code;
        viewType = 'events';
      }
      setCurrentHour(_=>(hour))
      setIdleStatus()
      history.push({pathname: '/events/details', state: {eventId: String(id), viewType}});
    },
    [events, history, incidents, setIdleStatus],
  );

  return (
    <div css={{padding: 20, width: '100%'}}>
      <TimelineTable>
        <HoursScale currentHour={currentHour} />
        <ImagesLine events={viewType === 'events' ? events : incidents} />
        <EventCounters
          counts={eventsCount}
          currentHour={currentHour}
          // onFilter={onFilter}
          isActive={viewType === 'events'}
          showEvents={handleShowEvents}
        />
        <EventCounters
          counts={incidentsCount}
          isIncidents
          currentHour={currentHour}
          // onFilter={onFilter}
          isActive={viewType === 'incidents'}
          showEvents={handleShowEvents}
        />
      </TimelineTable>
    </div>
  );
}
