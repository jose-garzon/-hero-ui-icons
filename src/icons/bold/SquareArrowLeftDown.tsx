import React from 'react';

interface SquareArrowLeftDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SquareArrowLeftDown = ({
  size = 24,
  color,
  className,
  ...props
}: SquareArrowLeftDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM9.17157 15.5784C8.75736 15.5784 8.42157 15.2426 8.42157 14.8284L8.42157 10.5858C8.42157 10.1716 8.75736 9.83578 9.17157 9.83578C9.58579 9.83578 9.92157 10.1716 9.92157 10.5858L9.92157 13.0178L14.2981 8.64124C14.591 8.34835 15.0659 8.34835 15.3588 8.64124C15.6517 8.93414 15.6517 9.40901 15.3588 9.7019L10.9822 14.0784H13.4142C13.8284 14.0784 14.1642 14.4142 14.1642 14.8284C14.1642 15.2426 13.8284 15.5784 13.4142 15.5784L9.17157 15.5784Z"/>
    </svg>
  );
};
