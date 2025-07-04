import React from 'react';

interface SendTwiceSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SendTwiceSquare = ({
  size = 24,
  color,
  className,
  ...props
}: SendTwiceSquareProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M17 15.5L10 15.5M10 15.5L13 13M10 15.5L13 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17 8.49976L10 8.49976M10 8.49976L13 5.99976M10 8.49976L13 10.9998" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7 6.00024L7 18.0002" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
