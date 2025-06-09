import React from 'react';

interface BombMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BombMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: BombMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="9.5" cy="14.5" r="7.5" stroke="black" stroke-width="1.5"/> <path d="M17 7L15 9" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19.5 7.5L20.5 8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 3.5L16.5 4.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 5L20 4" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
