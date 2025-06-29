import React from 'react';

interface UserBlockRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserBlockRounded = ({
  size = 24,
  color,
  className,
  ...props
}: UserBlockRoundedProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="6" r="4" stroke="black" stroke-width="1.5"/> <circle cx="17" cy="18" r="4" stroke="black" stroke-width="1.5"/> <path d="M20 15L14 21" stroke="black" stroke-width="1.5"/> <path d="M14 20.8344C13.3663 20.9421 12.695 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C13.7135 13 15.2832 13.3518 16.5 13.9359" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
