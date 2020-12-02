import React from 'react';
import {useEvents} from '@/context';
import {AppLayout} from '@/screens/Layouts';
import {EventsFilters} from './EventsFilters';
import {EventsTable} from './EventsTable';
import {EventsRightSidebar} from './EventsRight';
import {WorkLayout, FiltersPlace, RightBar, TablePlace} from './styles';

export function Events() {
  const {error, status, view, refreshView} = useEvents();

  React.useEffect(() => {
    refreshView();
  }, [refreshView]);

  return (
    <AppLayout>
      <WorkLayout>
        <FiltersPlace>
          <EventsFilters />
        </FiltersPlace>
        <TablePlace>
          <EventsTable
            status={status}
            error={error}
            eventsView={view}
          />
        </TablePlace>
        <RightBar>
          <EventsRightSidebar />
        </RightBar>
      </WorkLayout>
    </AppLayout>
  );
}
