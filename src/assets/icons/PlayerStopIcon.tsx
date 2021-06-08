import React from 'react';

export function PlayerStopIcon(props: React.SVGAttributes<SVGSVGElement>) {
  const {fill = "#686F7B", ...restProps} = props;
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 11C5.448 11 5 10.552 5 10V8V6C5 5.931 5.007 5.86363 5.02033 5.79855C5.11363 5.343 5.517 5 6 5H10C10.552 5 11 5.448 11 6V8V10C11 10.552 10.552 11 10 11H6ZM8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2ZM8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16Z"
        fill={fill}
      />
    </svg>
  );
}


