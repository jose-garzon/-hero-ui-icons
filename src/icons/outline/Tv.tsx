import React from 'react';

interface TvProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Tv = ({
  size = 24,
  color,
  className,
  ...props
}: TvProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22L8 22C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16L2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6L16 6C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12V16Z" stroke="black" stroke-width="1.5"/> <path d="M9 2L12 5.5L15 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 6V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16C18 16.5523 18.4477 17 19 17C19.5523 17 20 16.5523 20 16Z"/> <path d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z"/>
    </svg>
  );
};
