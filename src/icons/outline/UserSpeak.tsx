import React from 'react';

interface UserSpeakProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserSpeak = ({
  size = 24,
  color,
  className,
  ...props
}: UserSpeakProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="10" cy="6" r="4" stroke="black" stroke-width="1.5"/> <path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke="black" stroke-width="1.5"/> <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
