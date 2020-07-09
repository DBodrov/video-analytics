/**@jsx jsx */
import React from 'react';
import {observer} from 'mobx-react-lite';
import { css, jsx } from '@emotion/core'
import { useInject } from '@/store/use-inject';
import { pick } from '@/common/utils/pick';
import {StatsStore} from '@/stats/stats-store'
import styled from '@emotion/styled';
import {
  DropdownFilter,
  DropdownFilterProps,
} from '@/common/components/dropdown/DropdownFilter';

const Panel = styled.div`
  display: grid;
  grid-template: 1fr / repeat(4, minmax(200px, auto));
  column-gap: 10px;
  background-color: #273142;
  box-shadow: 0px 1px 0px #313D4F;
  padding: 0 30px;
  align-items: center;
`;

function pickProps(filterStore: DropdownFilterProps): DropdownFilterProps {
  return pick(
    filterStore,
    'title',
    'currentTitle',
    'items',
    'currentKey',
    'onClick',
  );
}

function EventsFiltersPanel() {
  const [statsStore] = useInject(StatsStore);
  const { location, sensor } = statsStore.filters;

  return (
    <Panel>
      <DropdownFilter {...pickProps(location)} css={{textAlign: 'left'}}/>
      <DropdownFilter {...pickProps(sensor)} css={{textAlign: 'left'}} />
      {/* <DropdownFilter {...pickProps(category)} css={{textAlign: 'left'}} /> */}
    </Panel>
  )

}

export const EventsFilters = observer(EventsFiltersPanel);
