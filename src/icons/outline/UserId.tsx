import React from 'react';

interface UserIdProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserId = ({
  size = 24,
  color,
  className,
  ...props
}: UserIdProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="9" cy="9" r="2" stroke="black" stroke-width="1.5"/> <path d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z" stroke="black" stroke-width="1.5"/> <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="black" stroke-width="1.5"/> <path d="M19 12H15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 9H14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 15H16" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
