/**@jsx jsx */
import { css, jsx, keyframes } from '@emotion/core';

export type CircleChartProps = {
  color?: string;
  percent?: number;
};

export function CircleChart({ color = '#1991EB', percent = 100 }: CircleChartProps) {
  const progress = keyframes`
    0% {
      stroke-dasharray: 0 100;
    }
  `;

  return (
    <svg viewBox="0 0 36 36" css={{ display: 'block', width: '100%', height: '100%' }}>
      <path
        d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#414F63"
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
