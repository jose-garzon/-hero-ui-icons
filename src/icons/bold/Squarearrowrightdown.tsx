import React from 'react';

interface SquarearrowrightdownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Squarearrowrightdown = ({
  size = 24,
  color,
  className,
  ...props
}: SquarearrowrightdownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447ZM14.8284 15.5784C15.2426 15.5784 15.5784 15.2426 15.5784 14.8284L15.5784 10.5858C15.5784 10.1716 15.2426 9.83578 14.8284 9.83578C14.4142 9.83578 14.0784 10.1716 14.0784 10.5858L14.0784 13.0178L9.7019 8.64124C9.40901 8.34835 8.93413 8.34835 8.64124 8.64124C8.34835 8.93414 8.34835 9.40901 8.64124 9.7019L13.0178 14.0784H10.5858C10.1716 14.0784 9.83579 14.4142 9.83579 14.8284C9.83579 15.2426 10.1716 15.5784 10.5858 15.5784L14.8284 15.5784Z"/>
    </svg>
  );
};
