import {TDateRange} from '@/components/DatesFilter/DatesFilter';
import moment from 'moment'

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

export function getDatePeriod(timestamp : string | undefined): TDateRange {
  let startTime = timestamp ? moment(timestamp, 'YYYY-MM-DD HH:mm:ss').toDate() : new Date();
  startTime.setHours(0, 0, 0, 0);
  const isoStart = startTime.toISOString();
  let endTime = timestamp ? moment(timestamp, 'YYYY-MM-DD HH:mm:ss').toDate() : new Date();
  endTime.setHours(23, 59, 59, 999);
  const isoEnd = endTime.toISOString();
  return [isoStart,isoEnd]
}