import React from 'react';

interface CardholderProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Cardholder = ({
  size = 24,
  color,
  className,
  ...props
}: CardholderProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" stroke-width="1.5"/> <path d="M17 11V10C17 8.11438 17 7.17157 16.4142 6.58579C15.8284 6 14.8856 6 13 6H11C9.11438 6 8.17157 6 7.58579 6.58579C7 7.17157 7 8.11438 7 10V11" stroke="black" stroke-width="1.5"/> <path d="M5 11H19" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 16H16" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
