import {StatsStore} from '@/stats/stats-store';

export const computeTodayInoutEvents = (store: StatsStore) => {
  const s = store.dataStats?.stats;
  const allInOutEvents = s?.reduce(
    (acc, current) => {
      return {
        ...acc,
        in: acc.in + current.today.inCount,
        out: acc.out + current.today.outCount,
      };
    },
    { in: 0, out: 0 },
  );
  const calcPercent = () => {
    const result = (allInOutEvents && (allInOutEvents.out / allInOutEvents.in) * 100) || 0;
    return isNaN(result) ? 0 : result;
  };

  return {
    eventsCounts: allInOutEvents ?? {in: 0, out: 0},
    percent: calcPercent(),
  };
};
