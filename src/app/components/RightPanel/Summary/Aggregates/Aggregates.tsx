/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core';
import { observer } from 'mobx-react-lite';
import { useInject } from '@/store/use-inject';
import { StatsStore } from '@/stats/stats-store';
import { CircleChart } from '@/common/components';
import { computeTodayInoutEvents } from './utils';
import { Aggregate, AggregateList } from './styles';

export const Aggregates = observer(() => {
  const [store] = useInject(StatsStore);
    const { eventsCounts, percent: inOutPercent } = computeTodayInoutEvents(store);

  return (
    <AggregateList>
      <Aggregate>
        <div css={{ width: '50px', height: '50px', marginRight: '10px' }}>
          <CircleChart percent={inOutPercent} />
        </div>
        <div
          css={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <span css={{ fontSize: 16 }}>
            {eventsCounts?.in} / {eventsCounts?.out}
          </span>
          <span css={{ color: '#7F8FA4' }}>Заехало / Выехало</span>
        </div>
      </Aggregate>
      <Aggregate>
        <div css={{ width: '50px', height: '50px', marginRight: '10px' }}>
          <CircleChart percent={30} color="#E82727" />
        </div>
        <div
          css={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <span css={{ fontSize: 16 }}>121 021/5 656</span>
          <span css={{ color: '#7F8FA4' }}>Пустых/ Заполненых</span>
        </div>
      </Aggregate>
    </AggregateList>
  );
});
