import React from 'react';

interface WheelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Wheel = ({
  size = 24,
  color,
  className,
  ...props
}: WheelProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <circle cx="12" cy="12" r="6" stroke="black" stroke-width="1.5"/> <circle cx="12" cy="12" r="2" stroke="black" stroke-width="1.5"/> <path d="M6 12L10 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 12L18 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9 17.1963L11 13.7322" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M13 10.2686L15 6.80445" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 17.1963L13 13.7322" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 10.2676L9 6.80348" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
