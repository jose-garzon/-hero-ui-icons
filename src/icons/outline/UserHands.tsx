import React from 'react';

interface UserHandsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserHands = ({
  size = 24,
  color,
  className,
  ...props
}: UserHandsProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8 13H16M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13M8 13C6.28928 13 4.84936 14.2804 4.64948 15.9795L4 21.5M16 13C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="12" cy="6" r="4" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
