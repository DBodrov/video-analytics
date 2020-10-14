import React from 'react';
import {useEvents} from '@/context';
import {AppLayout} from '@/screens/Layouts';
import {EventsFilters} from './EventsFilters';
import {EventsTable} from './EventsTable';
import {EventsRightSidebar} from './EventsRight';
import {WorkLayout, FiltersPlace, RightBar, TablePlace} from './styles';

export function Events() {
  const {eventsView, isIdle, isLoading, isError, isSuccess, error} = useEvents();
  return (
    <AppLayout>
      <WorkLayout>
        <FiltersPlace>
          <EventsFilters />
        </FiltersPlace>
        <TablePlace>
          <EventsTable
            isError={isError}
            isIdle={isIdle}
            isLoading={isLoading}
            isSuccess={isSuccess}
            error={error}
            eventsView={eventsView}
          />
        </TablePlace>
        <RightBar>
          <EventsRightSidebar />
        </RightBar>
      </WorkLayout>
    </AppLayout>
  );
}
