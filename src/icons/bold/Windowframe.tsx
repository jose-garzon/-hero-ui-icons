import React from 'react';

interface WindowframeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Windowframe = ({
  size = 24,
  color,
  className,
  ...props
}: WindowframeProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2.38421 4.54472 2.1008 6.11064 2.02645 8.75H21.9736C21.8992 6.11064 21.6158 4.54472 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM2 12C2 11.3766 2 10.7944 2.00339 10.25H8.25L8.25 21V21.9563C5.90962 21.8591 4.47468 21.5458 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7ZM10 6C10 6.55228 9.55228 7 9 7C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5C9.55228 5 10 5.44772 10 6ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z"/> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C11.1815 22 10.4341 22 9.75 21.9923V21L9.75 10.25H21.9966C22 10.7944 22 11.3766 22 12Z"/>
    </svg>
  );
};
