import React from 'react';
import {css, keyframes} from '@emotion/react';

export type CircleChartProps = {
  color?: string;
  emptyColor?: string;
  percent?: number;
};

export function CircleChart({color = '#1991EB', emptyColor = '#414F63', percent = 100}: CircleChartProps) {
  const progress = keyframes`
    0% {
      stroke-dasharray: 0 100;
    }
  `;

  return (
    <svg viewBox="0 0 36 36" css={{display: 'block', width: '100%', height: '100%'}}>
      <path
        d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={emptyColor}
        strokeWidth="3"
      />
      <path
        css={css`
          animation: ${progress} 1s ease-in forwards;
        `}
        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${percent}, 100`}
      />
    </svg>
  );
}
