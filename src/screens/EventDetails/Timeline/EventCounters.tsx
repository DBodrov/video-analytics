import React from 'react';
import {CircleWarningIcon, FlagIcon} from '@/assets/icons';
import {HeaderCell} from './styles';

type TCounterProps = {counts?: number[]; isIncidents?: boolean};

export function EventCounters({counts, isIncidents = false}: TCounterProps) {
  return (
    <>
      <HeaderCell>{isIncidents ? <CircleWarningIcon /> : <FlagIcon />}</HeaderCell>
      {counts &&
        counts.map((h, idx) => {
          return (
            <div
              key={idx}
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px var(--color-border) solid',
              }}
            >
              {h > 0 ? (
                <div
                  css={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: isIncidents
                      ? 'linear-gradient(0deg, #C8270C 2.22%, #F45438 98.44%)'
                      : 'var(--color-primary)',
                    width: 24,
                    height: 24,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {h}
                </div>
              ) : null}
            </div>
          );
        })}
    </>
  );
}
