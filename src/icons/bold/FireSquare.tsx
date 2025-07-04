import React from 'react';

interface FireSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const FireSquare = ({
  size = 24,
  color,
  className,
  ...props
}: FireSquareProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63275 8.95593 9.03974C9.36421 8.76863 9.87201 8.94191 9.89841 9.4313C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71298 12.2941 8.64272 12.2941 8C12.2941 7.05322 13.2525 6.45158 14.0008 7.03165C15.4593 8.1623 17 10.0558 17 12.6667Z"/>
    </svg>
  );
};
