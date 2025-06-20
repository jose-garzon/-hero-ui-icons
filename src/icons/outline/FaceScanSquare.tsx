import React from 'react';

interface FaceScanSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const FaceScanSquare = ({
  size = 24,
  color,
  className,
  ...props
}: FaceScanSquareProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <ellipse cx="15" cy="10.5" rx="1" ry="1.5"/> <ellipse cx="9" cy="10.5" rx="1" ry="1.5"/> <path d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
