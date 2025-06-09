import React from 'react';

interface SortByTimeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SortByTime = ({
  size = 24,
  color,
  className,
  ...props
}: SortByTimeProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10 7L2 7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 12H2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 17H2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="17" cy="12" r="5" stroke="black" stroke-width="1.5"/> <path d="M17 10V11.8462L18 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
