import React from 'react';

interface SquareArrowRightUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SquareArrowRightUp = ({
  size = 24,
  color,
  className,
  ...props
}: SquareArrowRightUpProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355ZM14.8284 8.42157C15.2426 8.42157 15.5784 8.75736 15.5784 9.17157L15.5784 13.4142C15.5784 13.8284 15.2426 14.1642 14.8284 14.1642C14.4142 14.1642 14.0784 13.8284 14.0784 13.4142L14.0784 10.9822L9.7019 15.3588C9.40901 15.6517 8.93413 15.6517 8.64124 15.3588C8.34835 15.0659 8.34835 14.591 8.64124 14.2981L13.0178 9.92157H10.5858C10.1716 9.92157 9.83579 9.58579 9.83579 9.17157C9.83579 8.75736 10.1716 8.42157 10.5858 8.42157L14.8284 8.42157Z"/>
    </svg>
  );
};
