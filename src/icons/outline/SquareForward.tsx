import React from 'react';

interface SquareForwardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SquareForward = ({
  size = 24,
  color,
  className,
  ...props
}: SquareForwardProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16.1549 3.43415L18.5122 5.47712C20.1349 6.88345 20.9462 7.58662 20.9462 8.49988C20.9462 9.41314 20.1349 10.1163 18.5122 11.5226L16.1549 13.5656C15.4414 14.184 15.0846 14.4932 14.7923 14.3597C14.5 14.2262 14.5 13.7541 14.5 12.8099V11.2856C11.5 11.2856 8.25 12.6785 7 14.9999C7 7.57131 11.4444 5.71416 14.5 5.71416V4.18984C14.5 3.24562 14.5 2.77351 14.7923 2.64003C15.0846 2.50656 15.4414 2.81575 16.1549 3.43415Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
