import React from 'react';
import {Span, Button} from 'neutrino-ui';
import {AppLayout} from '@/screens/Layouts';
import {SelectFilter} from '@/components';
import {useCompany, useRefs} from '@/context';
import {createFilterList} from '../Events/EventsFilters/utils';
import {useReportsClient} from './use-report-client';
import {ReportCard, ReportCardTitle, ReportFilters} from './styles';

const typesList = [
  {id: -1, value: 'Все', type: ['event', 'incident']},
  {id: 1, value: 'События', type: ['event']},
  {id: 2, value: 'Инциденты', type: ['incident']},
];

const allDay = () => {
  const now = new Date();
  const year = now.getFullYear();
  const monthNumber = now.getMonth() + 1;
  const month = String(monthNumber).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  // startTime.setHours(0, 0, 0, 0);
  // const isoStart = startTime.toDateString();
  // let endTime = new Date();
  // endTime.setHours(23, 59, 59, 999);
  // const isoEnd = endTime.toLocaleString();
  return {
    beginDay: `${year}-${month}-${date}`,
    endDay: `${year}-${month}-${date}`,
  };
};

export function ReportsPage() {
  const [{location, sensor, rule, template, types}, setState] = React.useState({
    location: -1,
    sensor: -1,
    template: -1,
    rule: -1,
    types: -1,
  });

  const {getReportFile} = useReportsClient();

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

  const readReportFile = React.useCallback(() => {
    const day = allDay();
    const query = {
      start_period: day.beginDay,
      end_period: day.endDay,
      locations: location > -1 ? location : undefined,
      sensors: sensor > -1 ? sensor : undefined,
      templates: template > -1 ? template : undefined,
      rules: rule > -1 ? rule : undefined,
      types: typesList.find(t => t.id === types)?.type,
    };
    getReportFile(query);
  }, [getReportFile, location, rule, sensor, template, types])

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
          </ReportFilters>
          <div
            css={{
              backgroundColor: 'var(--color-form)',
              borderTop: '1px var(--color-border) solid',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              paddingLeft: 30
            }}
          >
            <Button variant="primary" flat css={{minHeight: 36, height: 36, fontSize: 14}} onClick={readReportFile}>
              Скачать отчет
            </Button>
          </div>
        </ReportCard>
      </div>
    </AppLayout>
  );
}
