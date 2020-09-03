import React from 'react';
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
  return (
    <div css={{padding: 20, width: '100%'}}>
      <TimelineTable>
        <HoursScale />
        <ImagesLine events={allEvents} />
        <EventCounters counts={eventsCount} onFilter={onFilter} isActive={!isIncident} />
        <EventCounters counts={incidentsCount} isIncidents onFilter={onFilter} isActive={isIncident} />
      </TimelineTable>
    </div>
  );
}
