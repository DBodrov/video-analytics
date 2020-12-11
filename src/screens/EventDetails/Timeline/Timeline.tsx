import React from 'react';
import {useHistory} from 'react-router-dom';
import {HoursScale} from './HoursScale';
import {ImagesLine} from './ImagesLine';
import {EventCounters} from './EventCounters';
import {IOccurrenceView, TOccurrenceByHours} from '../types';
import {TimelineTable} from './styles';

type TimelineProps = {
  allEvents?: Record<number, IOccurrenceView[]> | undefined;
  events?: TOccurrenceByHours;
  incidents?: TOccurrenceByHours;
  eventsCount?: number[];
  incidentsCount?: number[];
  onFilter: (isIncident: boolean) => void;
  isIncident: boolean;
  viewType?: 'events' | 'incidents';
};

export function Timeline({
  allEvents,
  events,
  incidents,
  eventsCount,
  incidentsCount,
  onFilter,
  isIncident,
  viewType = 'events',
}: TimelineProps) {
  const history = useHistory();
  const handleShowEvents = React.useCallback(
    (hour: number, isIncident: boolean) => {
      return;
      //console.log('isIncident', isIncident)
      // if (events && incidents) {
      //   const occurrenceList = isIncident ? incidents[hour] : events[hour];
      //   const firstOccurrenceInHour = occurrenceList[0].eventId;
      //   history.push({
      //     pathname: '/events/details',
      //     state: {
      //       id: firstOccurrenceInHour,
      //       viewType: isIncident ? 'incidents' : 'events',
      //     },
      //   });
      // }
    },
    [],
  );
  return (
    <div css={{padding: 20, width: '100%'}}>
      <TimelineTable>
        <HoursScale />
        <ImagesLine events={allEvents} />
        <EventCounters
          counts={eventsCount}
          onFilter={onFilter}
          isActive={viewType === 'events'}
          showEvents={handleShowEvents}
        />
        <EventCounters
          counts={incidentsCount}
          isIncidents
          onFilter={onFilter}
          isActive={viewType === 'incidents'}
          showEvents={handleShowEvents}
        />
      </TimelineTable>
    </div>
  );
}
