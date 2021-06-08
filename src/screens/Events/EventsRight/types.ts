import {CompanySensorStatsGetResponse200Stats} from '@/backend/main';

export type TSensorsStats = CompanySensorStatsGetResponse200Stats;

export type TCounts = Record<string, TSensorsStats[]>;

export type TSensorsStatsState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  error?: any;
  counts?: TCounts;
};
