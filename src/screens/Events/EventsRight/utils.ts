import {TCounts} from './types';

type TCountsByIdAndHours = {
  [sensorId: number]: Record<string, {events: number; incidents: number}>;
};

export function groupByIdAndHours(counts?: TCounts): TCountsByIdAndHours | undefined {
  if (!counts) return undefined;

  const output: any = {};
  Object.keys(counts).forEach(sensorId => {
    const sensorCounts = counts[Number(sensorId)].reduce((acc, current, i) => {
      const hour = new Date(current.period!).getHours();
      return {
        ...acc,
        [hour]: {events: current.events, incidents: current.incidents},
      };
    }, {});
    output[Number(sensorId)] = sensorCounts;
  });
  return output;
}

const createEmptyView = () => {
  let view: Record<number, number> = {};
  let i = 0;
  while (i <= 23) {
    view[i] = 0;
    i++;
  }
  return view;
};

export function countAllIncidentsByHours(counts?: TCounts) {
  if (!counts) return undefined;
  const byIdAndHours = groupByIdAndHours(counts);
  if (byIdAndHours) {
    const emptyView = createEmptyView();
    const view = {...emptyView};

    Object.values(byIdAndHours).forEach((count, i) => {
      Object.keys(count).forEach(h => {
        view[Number(h)] = view[Number(h)] + count[h].incidents;
      });
    });
    return view;
  }
}

export function sumCountsBySensor(counts?: TCounts) {
  if (!counts) return undefined;
  const bySensor: {[id: string]: {eventsSum: number, incidentsSum: number}} = {};
  Object.keys(counts).forEach(sensorId => {
    const summary = counts[Number(sensorId)].reduce(
      (acc, curr) => {
        return {
          eventsSum: acc.eventsSum + curr.events,
          incidentsSum: acc.incidentsSum + curr.incidents,
        };
      },
      {eventsSum: 0, incidentsSum: 0},
    );
    bySensor[sensorId] = summary;
  });
  return bySensor;
}

export function sumTotalStats(counts?: TCounts) {
  if (!counts) return undefined;
  const bySensor = sumCountsBySensor(counts);
  if (!bySensor) return undefined;
  return Object.keys(bySensor).reduce(
    (acc, sensorId, i) => {
      const _counts = bySensor[sensorId];
      return {
        allEvents: acc.allEvents + _counts.eventsSum,
        allIncidents: acc.allIncidents + _counts.incidentsSum,
      };
    },
    {allEvents: 0, allIncidents: 0},
  );
}
