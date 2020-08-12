import React from 'react';
import {AppLayout} from '@/screens/Layouts';
import {EventsFilters} from './EventsFilters';
import {EventsTable} from './EventsTable';
import {EventsRightSidebar} from './EventsRight';
import {WorkLayout, FiltersPlace, RightBar, TablePlace} from './styles';

export function Events() {
  return (
    <AppLayout>
      <WorkLayout>
        <FiltersPlace>
          <EventsFilters />
        </FiltersPlace>
        <TablePlace>
          <EventsTable />
        </TablePlace>
        <RightBar>
          <EventsRightSidebar/>
        </RightBar>
      </WorkLayout>
    </AppLayout>
  );
}
