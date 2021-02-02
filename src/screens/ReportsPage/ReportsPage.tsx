import React from 'react';
import {Span, Button} from 'neutrino-ui';
import {IReportsPostRequest} from './types';
import {AppLayout} from '@/screens/Layouts';
import {SelectFilter, DatesFilter} from '@/components';
import {useCompany, useRefs} from '@/context';
import {TIMEZONE_OFFSET, dayIsoString} from '@/utils';
import {createFilterList} from '../Events/EventsFilters/utils';
import {useReportsClient} from './use-report-client';
import {ReportCard, ReportCardTitle, ReportFilters} from './styles';

const typesList = [
  {id: -1, value: 'Все', type: ['event', 'incident']},
  {id: 1, value: 'События', type: ['event']},
  {id: 2, value: 'Инциденты', type: ['incident']},
];

type TQueryState = {
  location: number;
  sensor: number;
  template: number;
  rule: number;
  types: number;
  dates?: [startDate: string, endDate: string];
};

export function ReportsPage() {
  const [{location, sensor, rule, template, types, dates}, setState] = React.useState<TQueryState>({
    location: -1,
    sensor: -1,
    template: -1,
    rule: -1,
    types: -1,
    dates: undefined,
  });

  const {getReportFile} = useReportsClient();

  const hasDates = Boolean(dates && dates[0] && dates[1]);


  const {locations, sensors} = useCompany();
  const {checkCategories, checks} = useRefs();
  const locationsOptions = createFilterList(locations) ?? [];
  locationsOptions.unshift({id: -1, value: 'Все'});
  const sensorsList = sensors?.map(s => s.ref);
  const sensorsOptions = createFilterList(sensorsList) ?? [];
  sensorsOptions.unshift({id: -1, value: 'Все'});
  const templatesList = createFilterList(checkCategories) ?? [];
  templatesList.unshift({id: -1, value: 'Любой'});
  const rulesList = createFilterList(checks) ?? [];
  rulesList.unshift({id: -1, value: 'Любые'});

  const setLocation = React.useCallback((id: number) => setState(s => ({...s, location: id})), []);
  const setSensor = React.useCallback((id: number) => setState(s => ({...s, sensor: id})), []);
  const setTemplate = React.useCallback((id: number) => setState(s => ({...s, template: id})), []);
  const setRule = React.useCallback((id: number) => setState(s => ({...s, rule: id})), []);
  const setType = React.useCallback((id: number) => setState(s => ({...s, types: id})), []);
  const setDates = React.useCallback((dates: [startDate: string, endDate: string]) => {
    setState(s => ({...s, dates}));
  }, []);

  const readReportFile = React.useCallback(() => {
    if (hasDates) {
      const query: IReportsPostRequest = {
        startTime: dayIsoString(dates![0], 'begin'),
        endTime: dayIsoString(dates![1], 'end'),
        locationIds: location > -1 ? [location] : undefined,
        sensorIds: sensor > -1 ? [sensor] : undefined,
        checkCategoryIds: template > -1 ? [template] : undefined,
        checkIds: rule > -1 ? [rule] : undefined,
        entityTypes: typesList.find(t => t.id === types)!.type,
        tzOffset: TIMEZONE_OFFSET,
      };
      getReportFile(query);
    }
  }, [hasDates, dates, location, sensor, template, rule, getReportFile, types]);

  return (
    <AppLayout>
      <div css={{width: '100%', height: '100%', padding: '30px'}}>
        <ReportCard>
          <ReportCardTitle>
            <Span css={{fontSize: 14}}>Общая статистика (События и инциденты за период)</Span>
          </ReportCardTitle>
          <ReportFilters>
            <SelectFilter
              onSelect={setLocation}
              options={locationsOptions}
              prefix="Площадки"
              css={{height: 36, flexBasis: 200, marginRight: 10}}
              value={location}
            />
            <SelectFilter
              onSelect={setSensor}
              options={sensorsOptions}
              prefix="Камеры"
              css={{height: 36, flexBasis: 220, marginRight: 10}}
              value={sensor}
            />
            <SelectFilter
              onSelect={setTemplate}
              options={templatesList}
              prefix="Шаблон"
              css={{height: 36, flexBasis: 220, marginRight: 10}}
              value={template}
            />
            <SelectFilter
              onSelect={setRule}
              options={rulesList}
              prefix="Правила"
              css={{height: 36, flexBasis: 'auto', marginRight: 10}}
              value={rule}
            />
            <SelectFilter
              onSelect={setType}
              options={typesList}
              prefix="События"
              css={{height: 36, flexBasis: 200, marginRight: 10}}
              value={types}
            />
            <DatesFilter name="reportDates" onSelect={setDates} dates={dates} />
          </ReportFilters>
          <div
            css={{
              backgroundColor: 'var(--color-form)',
              borderTop: '1px var(--color-border) solid',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              paddingLeft: 30,
            }}
          >
            <Button
              variant="primary"
              flat
              css={{minHeight: 36, height: 36, fontSize: 14}}
              onClick={readReportFile}
              disabled={!hasDates}
            >
              Скачать отчет
            </Button>
          </div>
        </ReportCard>
      </div>
    </AppLayout>
  );
}
