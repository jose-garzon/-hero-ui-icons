import React from 'react';

interface StopwatchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Stopwatch = ({
  size = 24,
  color,
  className,
  ...props
}: StopwatchProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13Z" stroke="black" stroke-width="1.5"/> <path d="M12 13V9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10 2H14" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
