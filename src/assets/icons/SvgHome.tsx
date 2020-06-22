import React from 'react';
import { SvgFC } from './icons-types';

export const SvgHome: SvgFC = React.memo(props => {
  return (
    <svg width={14} height={14} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 .063l6 4.973c-.144 0 0 .29 0 1v6.963a1 1 0 01-1 1h-3a1.3 1.3 0 01-1-1v-2.984c.16-.972-.294-1.42-1-.995H6c-.724-.425-1.178.023-1 .995v2.984a1.35 1.35 0 01-1 1H1a1 1 0 01-1-1V6.036c0-.705.144-1 0-1L6 .063a7.968 7.968 0 012 0z"
        fill="currentColor"
      />
    </svg>
  );
});
