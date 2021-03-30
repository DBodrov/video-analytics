import React from 'react';
import {useEvents} from '@/context';
import {AppLayout} from '@/screens/Layouts';
import {EventsFilters} from './EventsFilters';
import {EventsTable} from './EventsTable';
import {EventsRightSidebar} from './EventsRight';
import { EventPagination } from './EventsPagination';
import {WorkLayout, FiltersPlace, RightBar, TablePlace, PaginationPlace} from './styles';

export function Events() {
  const {error, status, view, refreshView, viewType} = useEvents();

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
            viewType={viewType}
          />
        </TablePlace>
        <RightBar>
          <EventsRightSidebar />
        </RightBar>
        <PaginationPlace>
          <EventPagination/>
        </PaginationPlace>
      </WorkLayout>
    </AppLayout>
  );
}
