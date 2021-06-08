import React from 'react';
import {hours} from './utils';
import {HourCell} from './styles';

export function HoursScale({currentHour}: any) {
  return (
    <>
      <span></span>
      {hours.map((h, i) => (
        <HourCell isActive={i === currentHour} key={h}>{h}</HourCell>
      ))}
    </>
  );
}
