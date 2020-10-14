import React, {useCallback} from 'react';
import {useCompany, useEvents, TEventsQuery, useRefs} from '@/context';
import {SelectFilter, SwitchFilter, MultiSelectFilter} from '@/components';
import {periodsList, createFilterList, createCheckAndCategoriesList} from './utils';
import {Panel} from './styles';

export function EventsFilters() {
  const {setQueryParams, filtersState, setFiltersState} = useEvents();
  const {locations, sensors} = useCompany();
  const {checkCategories, checks} = useRefs();

  const locationsOptions = createFilterList(locations) ?? [];
  locationsOptions.unshift({id: -1, title: 'Все'});
  const sensorsList = sensors?.map(s => s.ref);
  const sensorsOptions = createFilterList(sensorsList) ?? [];
  sensorsOptions.unshift({id: -1, title: 'Все'});
  const checkCategoriesOptions = createFilterList(checkCategories) ?? [];
  checkCategoriesOptions?.unshift({id: -1, title: 'Любой'});

  const checkAndCategoriesOptions = createCheckAndCategoriesList(checkCategories, checks);

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

  const setCheckFilter = useCallback(
    (ids: number[] = []) => {

      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, checkIds: ids}));
    },
    [setQueryParams],
  );

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
      <MultiSelectFilter
        onSelect={setCheckFilter}
        options={checkAndCategoriesOptions}
        prefix="Правила"
        css={{height: 36, flexBasis: 300, marginRight: 10}}
      />
    </Panel>
  );
}
