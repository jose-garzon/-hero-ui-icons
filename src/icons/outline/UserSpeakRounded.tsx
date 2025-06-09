import React from 'react';

interface UserSpeakRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserSpeakRounded = ({
  size = 24,
  color,
  className,
  ...props
}: UserSpeakRoundedProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="10" cy="6" r="4" stroke="black" stroke-width="1.5"/> <ellipse cx="10" cy="17" rx="7" ry="4" stroke="black" stroke-width="1.5"/> <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
