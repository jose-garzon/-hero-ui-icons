import React from 'react';

interface UserCrossRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserCrossRounded = ({
  size = 24,
  color,
  className,
  ...props
}: UserCrossRoundedProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="6" r="4" stroke="black" stroke-width="1.5"/> <path d="M14 20.8344C13.3663 20.9421 12.695 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C13.7135 13 15.2832 13.3518 16.5 13.9359" stroke="black" stroke-width="1.5"/> <circle cx="17" cy="18" r="4" stroke="black" stroke-width="1.5"/> <path d="M15.6665 16.6667L18.3332 19.3333M18.3335 16.6667L15.6668 19.3333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
