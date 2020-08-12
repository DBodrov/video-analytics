import React from 'react';
import {hours} from './utils';
import {HourCell} from './styles';

export function HoursScale() {
  return (
    <>
      <span></span>
      {hours.map(h => (
        <HourCell key={h}>{h}</HourCell>
      ))}
    </>
  );
}
