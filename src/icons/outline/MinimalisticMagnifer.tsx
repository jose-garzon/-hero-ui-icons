import React from 'react';

interface MinimalisticMagniferProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MinimalisticMagnifer = ({
  size = 24,
  color,
  className,
  ...props
}: MinimalisticMagniferProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="11.5" cy="11.5" r="9.5" stroke="black" stroke-width="1.5"/> <path d="M20 20L22 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
