import React from 'react';

interface BicyclingRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BicyclingRound = ({
  size = 24,
  color,
  className,
  ...props
}: BicyclingRoundProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="14" cy="4" r="2" stroke="black" stroke-width="1.5"/> <circle cx="6" cy="18" r="3" stroke="black" stroke-width="1.5"/> <circle cx="18" cy="18" r="3" stroke="black" stroke-width="1.5"/> <path d="M18.5002 9.99997H14.5824C14.2054 9.99997 13.8396 9.87213 13.5446 9.63733L11.3862 7.91916C10.1196 6.91084 8.25192 7.27102 7.45108 8.67806C6.67587 10.0401 7.25216 11.7736 8.68853 12.4004L11.7792 13.749C12.7315 14.1646 13.1698 15.2708 12.7605 16.2258L12.0002 18" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
