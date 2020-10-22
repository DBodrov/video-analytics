import React from 'react';
import {useHistory} from 'react-router-dom';
import {HoursScale} from './HoursScale';
import {ImagesLine} from './ImagesLine';
import {EventCounters} from './EventCounters';
import {TEventView} from '../types';
import {TimelineTable} from './styles';

type TimelineProps = {
  allEvents?: Record<number, TEventView[]> | undefined;
  eventsCount?: number[];
  incidentsCount?: number[];
  onFilter: (showIncident: boolean) => void;
  isIncident: boolean;
};

export function Timeline({allEvents, eventsCount, incidentsCount, onFilter, isIncident}: TimelineProps) {
  const history = useHistory();
  const handleShowEvents = React.useCallback(
    (hour: number, isIncident: boolean) => {
      const eventsList = allEvents![hour].filter(e => e.isIncident === isIncident);
      const firstEventInHour = eventsList[0].eventCode;
      history.push({
        pathname: '/events/details',
        state: {
          id: firstEventInHour,
        },
      });
    },
    [allEvents, history],
  );
  return (
    <div css={{padding: 20, width: '100%'}}>
      <TimelineTable>
        <HoursScale />
        <ImagesLine events={allEvents} />
        <EventCounters
          counts={eventsCount}
          onFilter={onFilter}
          isActive={!isIncident}
          showEvents={handleShowEvents}
        />
        <EventCounters
          counts={incidentsCount}
          isIncidents
          onFilter={onFilter}
          isActive={isIncident}
          showEvents={handleShowEvents}
        />
      </TimelineTable>
    </div>
  );
}
