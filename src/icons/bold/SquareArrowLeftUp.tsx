import React from 'react';

interface SquareArrowLeftUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SquareArrowLeftUp = ({
  size = 24,
  color,
  className,
  ...props
}: SquareArrowLeftUpProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355ZM9.17157 8.42157C8.75736 8.42157 8.42157 8.75736 8.42157 9.17157L8.42157 13.4142C8.42157 13.8284 8.75736 14.1642 9.17157 14.1642C9.58579 14.1642 9.92157 13.8284 9.92157 13.4142L9.92157 10.9822L14.2981 15.3588C14.591 15.6517 15.0659 15.6517 15.3588 15.3588C15.6517 15.0659 15.6517 14.591 15.3588 14.2981L10.9822 9.92157H13.4142C13.8284 9.92157 14.1642 9.58579 14.1642 9.17157C14.1642 8.75736 13.8284 8.42157 13.4142 8.42157L9.17157 8.42157Z"/>
    </svg>
  );
};
