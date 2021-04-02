import React, {useCallback} from 'react';
import {useCompany, useRefs} from '@/context';
import {SelectFilter, MultiSelectGroupFilter} from '@/components';
import {useTimelines} from '../TimelineContext';
import {createFilterList, createCheckAndCategoriesList} from './utils';
import {Panel} from './styles';
import {ITimelinesQuery} from '../types';




export function EventsDetailsFilters() {
  const {setQueryParams, setFiltersState, filtersState } = useTimelines();

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


  const setLocationFilter = useCallback(
    (id: number) => {
      setFiltersState(s => ({...s, locationFilter: id}));
      setQueryParams((q: ITimelinesQuery): ITimelinesQuery => ({...q, locationIds: id}));
    },
    [setFiltersState, setQueryParams],
  );

  const setSensorFilter = useCallback(
    (id: number) => {
      setFiltersState(s => ({...s, sensorFilter: id}));
      setQueryParams((q: ITimelinesQuery): ITimelinesQuery => ({...q, sensorIds: id}));
    },
    [setFiltersState, setQueryParams],
  );

  const setCheckFilter = useCallback(
    (ids: number[] = []) => {
      setQueryParams((q: ITimelinesQuery): ITimelinesQuery => ({...q, checkIds: ids}));
    },
    [setQueryParams],
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
      <MultiSelectGroupFilter
        onSelect={setCheckFilter}
        options={checkAndCategoriesOptions}
        prefix="Правила"
        css={{height: 36, flexBasis: 300, marginRight: 10}}
      />
    </Panel>
  );
}
