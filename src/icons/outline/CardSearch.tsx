import React from 'react';

interface CardSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CardSearch = ({
  size = 24,
  color,
  className,
  ...props
}: CardSearchProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 13V12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 16H6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 10L22 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="18" cy="17" r="3" stroke="black" stroke-width="1.5"/> <path d="M20.5 19.5L21.5 20.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
