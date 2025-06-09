import React from 'react';

interface MinusCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MinusCircle = ({
  size = 24,
  color,
  className,
  ...props
}: MinusCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M15 12H9" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
