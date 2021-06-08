import * as React from 'react';
import { SvgFC } from './icons-types';

export const SvgVehicleCount: SvgFC = React.memo(props => {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.417 13h4.573A3 3 0 0016 10V3a3 3 0 00-3.01-3H3.01A3 3 0 000 3v7a3 3 0 003.01 3H4v1.991A1 1 0 005 16H4a3.52 3.52 0 001.8-.6l2.4-1.8c.287-.215.353-.439.217-.6zm2.519-6H5.064a.649.649 0 110-1h5.873a.649.649 0 110 1h-.001zM9.2 9H4.8a.556.556 0 110-1h4.4a.556.556 0 110 1zm1.974-4h-6.35a.564.564 0 110-1h6.352a.564.564 0 110 1h-.002z"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="prefix__prefix__paint0_linear"
          x1={0.121}
          y1={0}
          x2={0.121}
          y2={15.758}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2EA1F8" />
          <stop offset={1} stopColor="#1990EA" />
        </linearGradient>
      </defs>
    </svg>
  );
});
