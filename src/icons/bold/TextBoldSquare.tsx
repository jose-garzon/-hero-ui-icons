import React from 'react';

interface TextBoldSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TextBoldSquare = ({
  size = 24,
  color,
  className,
  ...props
}: TextBoldSquareProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14.25 9C14.25 10.2426 13.2426 11.25 12 11.25H8.75V7.52174C8.75 7.09552 9.09552 6.75 9.52174 6.75H12C13.2426 6.75 14.25 7.75736 14.25 9Z"/> <path d="M8.75 16.8235V12.75H13C14.2426 12.75 15.25 13.7574 15.25 15C15.25 16.2426 14.2426 17.25 13 17.25H9.17647C8.94094 17.25 8.75 17.0591 8.75 16.8235Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM7.25 7.52174C7.25 6.26709 8.26709 5.25 9.52174 5.25H12C14.0711 5.25 15.75 6.92893 15.75 9C15.75 10.029 15.3356 10.9612 14.6645 11.6387C15.9004 12.2519 16.75 13.5268 16.75 15C16.75 17.0711 15.0711 18.75 13 18.75H9.17647C8.11251 18.75 7.25 17.8875 7.25 16.8235V7.52174Z"/>
    </svg>
  );
};
