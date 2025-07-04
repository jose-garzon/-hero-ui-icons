import React from 'react';

interface StreetsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Streets = ({
  size = 24,
  color,
  className,
  ...props
}: StreetsProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3.46447 3.46447C2 4.92893 2 7.28596 2 12C2 16.134 2 18.4553 2.98767 19.9517L19.9517 2.98766C18.4553 2 16.134 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"/> <path d="M21.0123 4.04833L13.0607 12L21.0123 19.9517C22 18.4553 22 16.134 22 12C22 7.866 22 5.54466 21.0123 4.04833Z"/> <path d="M12 13.0607L4.04833 21.0123C5.54466 22 7.866 22 12 22C16.134 22 18.4553 22 19.9517 21.0123L12 13.0607Z"/>
    </svg>
  );
};
