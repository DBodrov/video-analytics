import React, {useCallback, useEffect} from 'react';
import {useCompany, useEvents, TEventsQuery, useRefs} from '@/context';
import {SelectFilter, SwitchFilter, MultiSelectGroupFilter, DatesFilter, TDateRange} from '@/components';
import {dayIsoString} from '@/utils';
import {createFilterList, createCheckAndCategoriesList} from './utils';
import {Panel} from './styles';
import {ITimelinesFiltersState} from '../../EventDetails/types';

interface Props {
  detailsfiltersState?: ITimelinesFiltersState;
}

export function EventsFilters({detailsfiltersState}: Props) {
  const {setQueryParams, filtersState, setFiltersState} = useEvents();
  const {locations, sensors} = useCompany();
  const {checkCategories, checks} = useRefs();

  const locationsOptions = createFilterList(locations) ?? [];
  locationsOptions.unshift({id: -1, value: 'Все'});
  const sensorsList = sensors?.map(s => s.ref);
  const sensorsOptions = createFilterList(sensorsList) ?? [];
  sensorsOptions.unshift({id: -1, value: 'Все'});
  const checkCategoriesOptions = createFilterList(checkCategories) ?? [];
  checkCategoriesOptions?.unshift({id: -1, value: 'Любой'});

  const checkAndCategoriesOptions = createCheckAndCategoriesList(checkCategories, checks);

  useEffect(() => {
    if (detailsfiltersState) {
      setFiltersState(s => ({
        ...s,
        locationFilter: detailsfiltersState?.locationFilter,
        sensorFilter: detailsfiltersState.sensorFilter,
      }));
      setQueryParams(
        (q: TEventsQuery): TEventsQuery => ({
          ...q,
          locationIds: detailsfiltersState.locationFilter,
          sensorIds: detailsfiltersState.sensorFilter,
          page: 1,
        }),
      );
    }
  }, [detailsfiltersState, setFiltersState, setQueryParams]);

  const setLocationFilter = useCallback(
    (id: number) => {
      setFiltersState(s => ({...s, locationFilter: id}));
      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, locationIds: id, page: 1}));
    },
    [setFiltersState, setQueryParams],
  );

  const setSensorFilter = useCallback(
    (id: number) => {
      setFiltersState(s => ({...s, sensorFilter: id}));
      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, sensorIds: id, page: 1}));
    },
    [setFiltersState, setQueryParams],
  );

  const setCheckFilter = useCallback(
    (ids: number[] = []) => {
      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, checkIds: ids, page: 1}));
    },
    [setQueryParams],
  );

  const setIncidentFilter = useCallback(
    (on: boolean) => {
      setFiltersState(s => ({...s, incidentFilter: on}));
      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, onlyIncidents: on, page: 1}));
    },
    [setFiltersState, setQueryParams],
  );

  const setPeriodFilter = useCallback(
    (period: [startDate: string, endDate: string]) => {
      const eventPeriod: TDateRange = [dayIsoString(period[0], 'begin'), dayIsoString(period[1], 'end')];
      setFiltersState(s => ({...s, periodFilter: eventPeriod}));
      setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, dates: eventPeriod, page: 1}));
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
        value={filtersState.locationFilter}
      />
      <SelectFilter
        onSelect={setSensorFilter}
        options={sensorsOptions}
        prefix="Камеры"
        css={{height: 36, flexBasis: 220, marginRight: 10}}
        value={filtersState.sensorFilter}
      />
      <SwitchFilter
        prefix="Инциденты"
        onToggle={setIncidentFilter}
        on={filtersState.incidentFilter}
        css={{marginRight: 10}}
      />
      <MultiSelectGroupFilter
        onSelect={setCheckFilter}
        options={checkAndCategoriesOptions}
        prefix="Правила"
        css={{height: 36, flexBasis: 300, marginRight: 10}}
      />
      <DatesFilter name="eventsPeriod" onSelect={setPeriodFilter} dates={filtersState.periodFilter} />
    </Panel>
  );
}
