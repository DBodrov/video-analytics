import {StatsStore} from '@/stats/stats-store';

export const computeTodayInoutEvents = (store: StatsStore) => {
  const s = store.dataStats?.stats;
  const summaryEvents = s?.reduce(
    (acc, current) => {
      return {
        ...acc,
        in: acc.in + current.today.inCount,
        out: acc.out + current.today.outCount,
        filled: acc.filled + current.today.filledCount,
        unfilled: acc.unfilled + current.today.unfilledCount,
      };
    },
    { in: 0, out: 0, filled: 0, unfilled: 0 },
  );
  const calcPercent = (firstCount: number = 0, secondCount: number = 0) => {
    const result = (summaryEvents && (secondCount / firstCount) * 100) || 0;
    return isNaN(result) ? 0 : result;
  };

  return {
    eventsCounts: summaryEvents ?? {in: 0, out: 0, filled: 0, unfilled: 0},
    inOutPercent: calcPercent(summaryEvents?.in, summaryEvents?.out),
    fillUnfillPercent: calcPercent(summaryEvents?.filled, summaryEvents?.unfilled)
  };
};
