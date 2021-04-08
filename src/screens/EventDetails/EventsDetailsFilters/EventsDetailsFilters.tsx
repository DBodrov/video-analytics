import React, {useCallback, useState, useEffect} from 'react';
import {useCompany, useRefs} from '@/context';
import {SelectFilter, MultiSelectGroupFilter, TDateRange} from '@/components';
import {useTimelines} from '../TimelineContext';
import {createFilterList, createCheckAndCategoriesList} from './utils';
import {Panel, muiTheme} from './styles';
import {ITimelinesQuery} from '../types';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import {ThemeProvider} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";
import moment from 'moment';
import {getDatePeriod} from '@/utils';
import format from "date-fns/format";


class RuLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date: number | Date) {
    return format(date, "LLLL", { locale: ruLocale });
  }

  getDatePickerHeaderText(date: number | Date) {
    return format(date, "d MMMM", { locale: ruLocale });
  }
}


interface Props {
  parrentDate: string | undefined;
}

export function EventsDetailsFilters({parrentDate}: Props) {
  const {setQueryParams, setFiltersState, filtersState, loadStatus} = useTimelines();

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

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(parrentDate ?? 0));

  useEffect(() => {
    setSelectedDate(new Date(parrentDate ?? 0));
  }, [parrentDate]);

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

  const setData = useCallback(
    (date: Date | null) => {
      const isDate = moment(date,"DD-MM-YYYY")
      if (isDate.isValid())
      {
        const eventPeriod: TDateRange = getDatePeriod(date?.toISOString());
        setSelectedDate(date);
        setFiltersState(s => ({...s, periodFilter: eventPeriod}));
        setQueryParams((q: ITimelinesQuery): ITimelinesQuery => ({...q, dates: eventPeriod}));
      }
    },
    [setFiltersState, setQueryParams, setSelectedDate],
  );

  if (!loadStatus) {
    return (
      <span
        css={{
          display: 'flex',
          marginTop: '5px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      </span>
    );
  } else
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
        <ThemeProvider theme={muiTheme}>
          <MuiPickersUtilsProvider utils={RuLocalizedUtils} locale={ruLocale}>
            <KeyboardDatePicker
              format="yyyy-MM-dd"
              margin="dense"
              id="date-picker-dialog"
              label="Выбор даты"
              variant="inline"
              value={selectedDate}
              onChange={setData}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Panel>
    );
}
