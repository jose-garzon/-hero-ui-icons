import React from 'react';

interface BedsideTable4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BedsideTable4 = ({
  size = 24,
  color,
  className,
  ...props
}: BedsideTable4Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 22V20.5M5 22V20.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 20V8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 12V15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9 12V15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12V10Z" stroke="black" stroke-width="1.5"/> <path d="M2 8H22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
