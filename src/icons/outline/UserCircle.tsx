import React from 'react';

interface UserCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserCircle = ({
  size = 24,
  color,
  className,
  ...props
}: UserCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="9" r="3" stroke="black" stroke-width="1.5"/> <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
