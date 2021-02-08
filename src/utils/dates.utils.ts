import {TDateRange} from '@/components/DatesFilter/DatesFilter';

export function dayIsoString(dateString: string, beginOrEnd: 'begin' | 'end') {
  const date = new Date(dateString);
  if (beginOrEnd === 'begin') {
    date.setHours(0, 0, 0, 0);
  } else {
    date.setHours(23, 59, 59, 999);
  }
  return date.toISOString();
}

export function defaultPeriod(): TDateRange {
  const now = new Date();
  const start = now.setHours(0, 0, 0, 0);
  const end = now.setHours(23, 59, 59, 999);
  const startPeriod = new Date(start).toISOString();
  const endPeriod = new Date(end).toISOString();
  return [startPeriod, endPeriod];
}
