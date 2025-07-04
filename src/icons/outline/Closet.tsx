import React from 'react';

interface ClosetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Closet = ({
  size = 24,
  color,
  className,
  ...props
}: ClosetProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 22V21.5M5 22V21.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 21V2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 8V10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V13C22 16.7712 22 18.6569 20.8284 19.8284C19.6569 21 17.7712 21 14 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V10Z" stroke="black" stroke-width="1.5"/> <path d="M2 8H12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 15H22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 18L17 18" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 18L9 18" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
