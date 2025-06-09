import React from 'react';

interface ForbiddenCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ForbiddenCircle = ({
  size = 24,
  color,
  className,
  ...props
}: ForbiddenCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M18.5 5.5L5.50002 18.4998" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
