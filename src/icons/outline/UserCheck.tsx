import React from 'react';

interface UserCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserCheck = ({
  size = 24,
  color,
  className,
  ...props
}: UserCheckProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="6" r="4" stroke="black" stroke-width="1.5"/> <circle cx="18" cy="16" r="4" stroke="black" stroke-width="1.5"/> <path d="M16.6665 16L17.5 17L19.3332 15.1111" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
