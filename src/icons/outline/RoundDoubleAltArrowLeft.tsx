import React from 'react';

interface RoundDoubleAltArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RoundDoubleAltArrowLeft = ({
  size = 24,
  color,
  className,
  ...props
}: RoundDoubleAltArrowLeftProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M15.5 9L12.5 12L15.5 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M11.5 9L8.5 12L11.5 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
