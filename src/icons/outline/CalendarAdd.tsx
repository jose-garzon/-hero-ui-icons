import React from 'react';

interface CalendarAddProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CalendarAdd = ({
  size = 24,
  color,
  className,
  ...props
}: CalendarAddProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="black" stroke-width="1.5"/> <path d="M18 16L16 16M16 16L14 16M16 16L16 14M16 16L16 18" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 4V2.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 4V2.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2.5 9H21.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
