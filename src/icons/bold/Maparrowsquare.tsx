import React from 'react';

interface MaparrowsquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Maparrowsquare = ({
  size = 24,
  color,
  className,
  ...props
}: MaparrowsquareProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM16.9348 8.19598L13.4227 17.3618C13.1045 18.1922 11.94 18.2192 11.6917 17.4019L10.6352 13.9249C10.553 13.6545 10.3455 13.447 10.0751 13.3648L6.5981 12.3083C5.78079 12.06 5.80779 10.8955 6.63824 10.5773L15.804 7.06521C16.5389 6.78361 17.2164 7.46107 16.9348 8.19598Z"/>
    </svg>
  );
};
