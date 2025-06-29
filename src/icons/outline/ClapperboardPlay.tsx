import React from 'react';

interface ClapperboardPlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ClapperboardPlay = ({
  size = 24,
  color,
  className,
  ...props
}: ClapperboardPlayProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" stroke-width="1.5"/> <path d="M21.5 8H2.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10.5 2.5L7 8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 2.5L13.5 8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 14.5C15 13.8666 14.338 13.4395 13.014 12.5852C11.6719 11.7193 11.0008 11.2863 10.5004 11.6042C10 11.9221 10 12.7814 10 14.5C10 16.2186 10 17.0779 10.5004 17.3958C11.0008 17.7137 11.6719 17.2807 13.014 16.4148C14.338 15.5605 15 15.1334 15 14.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
