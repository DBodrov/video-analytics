/**@jsx jsx */
import React from 'react';
import {createPortal} from 'react-dom';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';
import { EventsFilters } from './EventsFilters';
import { EventsList } from './EventsList';
import { css, jsx } from '@emotion/core';
import { AppUiStore } from '@/app/app-ui-store';
import {EventsStore} from './events-store';
import { useInject } from '@/store/use-inject';

const Page = styled.div`
  display: grid;
  grid-template: 60px 1fr / 1fr;
  width: 100%;
`;

const PageTitle = styled.span`
  font-size: 18px;
  line-height: 23px;
  color: #B4C2D7;
`;

function EventsPageContainer() {
  const [appUi, store] = useInject(AppUiStore, EventsStore);

  React.useEffect(() => {
    store.fetchData();
  }, [])

  const { appHeaderContainer } = appUi;
  return (
    <Page>
      {appHeaderContainer && createPortal(<PageTitle>События</PageTitle>, appHeaderContainer)}
      <EventsFilters />
      <div css={{ padding: 30 }}>
        <EventsList />
      </div>
    </Page>
  );
}

export const EventsPage = observer(EventsPageContainer);
