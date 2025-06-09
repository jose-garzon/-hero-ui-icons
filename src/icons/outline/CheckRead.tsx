import React from 'react';

interface CheckReadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CheckRead = ({
  size = 24,
  color,
  className,
  ...props
}: CheckReadProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 12.9L7.14286 16.5L15 7.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20 7.5625L11.4283 16.5625L11 16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
