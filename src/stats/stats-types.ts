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

interface HavingId {
  id: number;
}

export interface ItemKeysData {
  location: HavingId;
  sensor: HavingId;
  trackedObjectCategory?: HavingId;
  category?: HavingId;
}

export interface ApiImage {
  compression: string;
  content: string;
}

export interface RefItemToShow {
  id: number;
  title: string;
}

export interface StatsItem {
  key: ItemKey;
  image: ApiImage | null;
  location: RefItemToShow;
  sensor: RefItemToShow;
  category: RefItemToShow;
  inCount: number;
  outCount: number;
  lastUpdateDateF: string | undefined;
  trackedObjectNumber?: string | undefined;
}
