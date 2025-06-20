import React from 'react';

interface PlusMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PlusMinus = ({
  size = 24,
  color,
  className,
  ...props
}: PlusMinusProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447M3.46447 20.5355L20.5355 3.46447" stroke="black" stroke-width="1.5"/> <path d="M18 17H13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10.5 8.00002H8M8 8.00002L5.5 8.00002M8 8.00002L8 5.5M8 8.00002L8 10.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
