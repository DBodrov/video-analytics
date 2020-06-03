import {
  InoutEventsStatsGetResponse200Stats,
  InoutLatestEventsGetResponse200,
  InoutLatestEventsGetResponse200Events,
} from '@/backend/main/models';
import { InoutEventsStatsGetResponse200 } from '@/backend/main/models/InoutEventsStatsGetResponse200';

export type DataStats = InoutEventsStatsGetResponse200;
export type DataLatest = InoutLatestEventsGetResponse200;
export type StatsItemData = InoutEventsStatsGetResponse200Stats;
export type LatestItemData = InoutLatestEventsGetResponse200Events;
export type ItemKey = string;

export type ItemDataKeys = Pick<
  StatsItemData,
  'location' | 'sensor' | 'trackedObjectCategory'
>;

export interface ApiImage {
  compression: string;
  content: string;
}

export interface StatsItem {
  key: ItemKey;
  image: ApiImage | null;
  sensor: string;
  category: string;
  inCount: number;
  outCount: number;
  lastUpdateDateF: string | undefined;
}
