import React from 'react';

interface RoundArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RoundArrowLeft = ({
  size = 24,
  color,
  className,
  ...props
}: RoundArrowLeftProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M16 12H8M8 12L11 9M8 12L11 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
