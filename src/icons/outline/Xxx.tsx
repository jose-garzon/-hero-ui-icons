import React from 'react';

interface XxxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Xxx = ({
  size = 24,
  color,
  className,
  ...props
}: XxxProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8.5 9L6.5 12M6.5 12L4.5 15M6.5 12L4.5 9M6.5 12L8.5 15M14 9L12 12M12 12L10 15M12 12L10 9M12 12L14 15M19.5 9L17.5 12M17.5 12L15.5 15M17.5 12L15.5 9M17.5 12L19.5 15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
