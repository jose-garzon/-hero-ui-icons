import React from 'react';

interface SquarearrowupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Squarearrowup = ({
  size = 24,
  color,
  className,
  ...props
}: SquarearrowupProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355ZM12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V9.81066L14.4697 11.5303C14.7626 11.8232 15.2374 11.8232 15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697L12.5303 7.46967C12.3897 7.32902 12.1989 7.25 12 7.25C11.8011 7.25 11.6103 7.32902 11.4697 7.46967L8.46967 10.4697C8.17678 10.7626 8.17678 11.2374 8.46967 11.5303C8.76256 11.8232 9.23744 11.8232 9.53033 11.5303L11.25 9.81066V16C11.25 16.4142 11.5858 16.75 12 16.75Z"/>
    </svg>
  );
};
