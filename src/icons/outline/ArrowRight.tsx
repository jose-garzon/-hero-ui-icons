import React from 'react';

interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ArrowRight = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowRightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
