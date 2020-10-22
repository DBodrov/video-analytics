import React from 'react';
import {CircleWarningIcon, FlagIcon} from '@/assets/icons';
import {HeaderCellButton} from './styles';

type TCounterProps = {
  counts?: number[];
  isIncidents?: boolean;
  onFilter: (showIncidents: boolean) => void;
  isActive: boolean;
  showEvents: (hour: number, isIncident: boolean) => void;
};

export function EventCounters({counts, isIncidents = false, isActive, onFilter, showEvents}: TCounterProps) {
  const handleSetEventsType = React.useCallback(() => {
    onFilter(isIncidents);
  }, [isIncidents, onFilter]);

  return (
    <>
      <HeaderCellButton
        onClick={handleSetEventsType}
        css={{backgroundColor: isActive ? '#364357' : 'transparent'}}
      >
        {isIncidents ? <CircleWarningIcon /> : <FlagIcon />}
      </HeaderCellButton>
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
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                  onClick={() => showEvents(idx, isIncidents)}
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
