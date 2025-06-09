import React from 'react';

interface InfinityProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Infinity = ({
  size = 24,
  color,
  className,
  ...props
}: InfinityProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10.0005 8C9.16474 7.37209 8.12582 7 7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17C9.76142 17 10.5 15 12 12C13.5 9 14.2386 7 17 7C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17C15.8743 17 14.8357 16.6278 14 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
