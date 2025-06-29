import React from 'react';

interface SadCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SadCircle = ({
  size = 24,
  color,
  className,
  ...props
}: SadCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <ellipse cx="15" cy="10.5" rx="1" ry="1.5"/> <ellipse cx="9" cy="10.5" rx="1" ry="1.5"/>
    </svg>
  );
};
