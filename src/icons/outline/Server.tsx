import React from 'react';

interface ServerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Server = ({
  size = 24,
  color,
  className,
  ...props
}: ServerProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17Z" stroke="black" stroke-width="1.5"/> <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6C22 7.88562 22 8.82843 21.4142 9.41421C20.8284 10 19.8856 10 18 10H6C4.11438 10 3.17157 10 2.58579 9.41421C2 8.82843 2 7.88562 2 6Z" stroke="black" stroke-width="1.5"/> <path d="M11 6H18" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6 6H8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 17H18" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6 17H8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
