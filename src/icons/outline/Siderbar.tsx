import React from 'react';

interface SiderbarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Siderbar = ({
  size = 24,
  color,
  className,
  ...props
}: SiderbarProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11V13C22 16.7712 22 18.6569 20.8284 19.8284C19.6569 21 17.7712 21 14 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11Z" stroke="black" stroke-width="1.5"/> <path d="M5.5 10H11.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6.5 14H10.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 21L15 3" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
