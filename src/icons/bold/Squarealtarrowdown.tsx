import React from 'react';

interface SquarealtarrowdownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Squarealtarrowdown = ({
  size = 24,
  color,
  className,
  ...props
}: SquarealtarrowdownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM8.46967 9.96967C8.76256 9.67678 9.23744 9.67678 9.53033 9.96967L12 12.4393L14.4697 9.96967C14.7626 9.67678 15.2374 9.67678 15.5303 9.96967C15.8232 10.2626 15.8232 10.7374 15.5303 11.0303L12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303L8.46967 11.0303C8.17678 10.7374 8.17678 10.2626 8.46967 9.96967Z"/>
    </svg>
  );
};
