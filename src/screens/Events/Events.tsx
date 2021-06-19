import React from 'react';
import {useLocation} from 'react-router-dom';
import {useEvents} from '@/context';
import {AppLayout} from '@/screens/Layouts';
import {EventsFilters} from './EventsFilters';
import {EventsTable} from './EventsTable';
import {EventsRightSidebar} from './EventsRight';
import {EventPagination} from './EventsPagination';
import {WorkLayout, FiltersPlace, RightBar, TablePlace, PaginationPlace} from './styles';
import {ITimelinesFiltersState} from '../EventDetails/types';


export function Events() {
  const {error, status, view, refreshView, viewType} = useEvents();

  const location = useLocation<{filtersState: ITimelinesFiltersState; checkIds?: number[]}>();

  React.useEffect(() => {
    refreshView();
  }, [refreshView]);

  return (
    <AppLayout>
      <WorkLayout>
        <FiltersPlace>
          <EventsFilters
            detailsfiltersState={location?.state}
          />
        </FiltersPlace>
        <TablePlace>
          <EventsTable status={status} error={error} eventsView={view} viewType={viewType} />
        </TablePlace>
        <RightBar>
          <EventsRightSidebar />
        </RightBar>
        <PaginationPlace>
          {/* <EventPagination /> */}
        </PaginationPlace>
      </WorkLayout>
    </AppLayout>
  );
}
