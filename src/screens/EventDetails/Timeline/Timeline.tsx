import React from 'react';
import {useTimelineClient} from '../use-timeline-client';
import {HoursScale} from './HoursScale';
import {ImagesLine} from './ImagesLine';
import {EventCounters} from './EventCounters';
import {TimelineTable} from './styles';

export function Timeline() {
  const {queryTimeline, allEventsByHours, eventsCount, incidentsCount} = useTimelineClient();

  React.useEffect(() => {
    if (!allEventsByHours) {
      queryTimeline();
    }
  }, [allEventsByHours, queryTimeline]);

  return (
    <div css={{padding: 20, width: '100%'}}>
      <TimelineTable>
        <HoursScale />
        <ImagesLine events={allEventsByHours} />
        <EventCounters counts={eventsCount} />
        <EventCounters counts={incidentsCount} isIncidents />
      </TimelineTable>
    </div>
  );
}
