import React from 'react';

interface SquareAltArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SquareAltArrowUp = ({
  size = 24,
  color,
  className,
  ...props
}: SquareAltArrowUpProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355ZM8.46967 14.0303C8.76256 14.3232 9.23744 14.3232 9.53033 14.0303L12 11.5607L14.4697 14.0303C14.7626 14.3232 15.2374 14.3232 15.5303 14.0303C15.8232 13.7374 15.8232 13.2626 15.5303 12.9697L12.5303 9.96967C12.3897 9.82902 12.1989 9.75 12 9.75C11.8011 9.75 11.6103 9.82902 11.4697 9.96967L8.46967 12.9697C8.17678 13.2626 8.17678 13.7374 8.46967 14.0303Z"/>
    </svg>
  );
};
