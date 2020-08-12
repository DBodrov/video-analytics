import React, {useCallback} from 'react';
import styled from '@emotion/styled';
import {useCompany, useEvents, TEventsQuery, useRefs} from '@/context';
import {SelectFilter, SwitchFilter} from '@/components';

const Panel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-form);
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

const createFilterList = (data?: any[]) => {
  const list = data?.filter(item => item.id > 0).map(item => ({id: item.id, title: item.name}));
  return list;
};

const periodsList = [
  {
    id: -1,
    title: '1 день',
    filterDate() {
      return {startTime: undefined, endTime: undefined};
    },
  },
  {
    id: 1,
    title: '3 дня',
    filterDate() {
      const now = new Date();
      const endTime = now.toISOString();
      const startDate = new Date();
      const startTimeVal = startDate.setDate(startDate.getDate() - 3);
      const startTime = new Date(startTimeVal).toISOString();
      return {
        startTime,
        endTime,
      };
    },
  },
  {
    id: 2,
    title: '1 неделя',
    filterDate() {
      const now = new Date();
      const endTime = now.toISOString();
      const startDate = new Date();
      const startTimeVal = startDate.setDate(startDate.getDate() - 7);
      const startTime = new Date(startTimeVal).toISOString();
      return {
        startTime,
        endTime,
      };
    },
  },
  {
    id: 3,
    title: '1 месяц',
    filterDate() {
      const now = new Date();
      const endTime = now.toISOString();
      const startDate = new Date();
      const startTimeVal = startDate.setMonth(startDate.getMonth() - 1);
      const startTime = new Date(startTimeVal).toISOString();
      return {
        startTime,
        endTime,
      };
    },
  },
];

export function EventsFilters() {
  const {setQueryParams, filtersState, setFiltersState} = useEvents();
  const {locations, sensors} = useCompany();
  const {checkCategories} = useRefs();

  const locationsOptions = createFilterList(locations) ?? [];
  locationsOptions.unshift({id: -1, title: 'Все'});
  const sensorsOptions = createFilterList(sensors) ?? [];
  sensorsOptions.unshift({id: -1, title: 'Все'});
  const checkCategoriesOptions = createFilterList(checkCategories) ?? [];
  checkCategoriesOptions?.unshift({id: -1, title: 'Любой'});

  const setLocationFilter = useCallback(
    (id: number) => {
      setFiltersState(s => ({...s, locationFilter: id}));
      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, locationIds: id}));
    },
    [setFiltersState, setQueryParams],
  );

  const setSensorFilter = useCallback(
    (id: number) => {
      setFiltersState(s => ({...s, sensorFilter: id}));
      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, sensorIds: id}));
    },
    [setFiltersState, setQueryParams],
  );

  // const setCheckCategoryFilter = useCallback(
  //   (id: number) => {
  //     /**@ts-ignore */
  //     setQueryParams((q: TEventsQuery): TEventsQuery => ({ ...q, categoryIds: id }));
  //   },
  //   [setQueryParams],
  // );

  const setIncidentFilter = useCallback(
    (on: boolean) => {
      setFiltersState(s => ({...s, incidentFilter: on}));
      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, onlyIncidents: on}));
    },
    [setFiltersState, setQueryParams],
  );

  const setPeriodFilter = useCallback(
    (periodId: number) => {
      setFiltersState(s => ({...s, periodFilter: periodId}));
      if (periodId === -1) {
        setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, startTime: undefined, endTime: undefined}));
        return;
      }
      const {startTime, endTime} = periodsList[periodId]?.filterDate?.();
      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, startTime, endTime}));
    },
    [setFiltersState, setQueryParams],
  );

  return (
    <Panel>
      <SelectFilter
        onSelect={setLocationFilter}
        options={locationsOptions}
        prefix="Площадки"
        css={{height: 36, flexBasis: 200, marginRight: 10}}
        defaultValue={filtersState.locationFilter}
      />
      <SelectFilter
        onSelect={setSensorFilter}
        options={sensorsOptions}
        prefix="Камеры"
        css={{height: 36, flexBasis: 200, marginRight: 10}}
        defaultValue={filtersState.sensorFilter}
      />
      <SwitchFilter
        prefix="Инциденты"
        onToggle={setIncidentFilter}
        on={filtersState.incidentFilter}
        css={{marginRight: 10}}
      />
      <SelectFilter
        onSelect={setPeriodFilter}
        options={periodsList}
        prefix="Период"
        css={{height: 36, flexBasis: 250, marginRight: 10}}
        defaultValue={filtersState.periodFilter}
      />
    </Panel>
  );
}
