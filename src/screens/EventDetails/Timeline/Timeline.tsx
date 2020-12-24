import React from 'react';
import {useHistory} from 'react-router-dom';
import {HoursScale} from './HoursScale';
import {ImagesLine} from './ImagesLine';
import {EventCounters} from './EventCounters';
import {TOccurrenceByHours} from '../types';
import {TimelineTable} from './styles';

type TimelineProps = {
  currentDate?: string;
  events?: TOccurrenceByHours;
  incidents?: TOccurrenceByHours;
  eventsCount?: number[];
  incidentsCount?: number[];
  // onFilter: (isIncident: boolean) => void;
  // isIncident: boolean;
  viewType?: 'events' | 'incidents';
};

export function Timeline({
  currentDate,
  events,
  incidents,
  eventsCount,
  incidentsCount,
  // onFilter,
  //isIncident,
  viewType = 'events',
}: TimelineProps) {
  const history = useHistory();
  const currentHour = new Date(currentDate!).getHours();

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
      history.push({pathname: '/events/details', state: {eventId: String(id), viewType}});
    },
    [events, history, incidents],
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
