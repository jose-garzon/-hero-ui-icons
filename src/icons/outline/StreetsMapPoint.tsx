import React from 'react';

interface StreetsMapPointProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const StreetsMapPoint = ({
  size = 24,
  color,
  className,
  ...props
}: StreetsMapPointProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" stroke="black" stroke-width="1.5"/> <path d="M5.5 8.75732C5.5 6.95835 7.067 5.5 9 5.5C10.933 5.5 12.5 6.95835 12.5 8.75732C12.5 10.5422 11.3829 12.625 9.64003 13.3698C9.23374 13.5434 8.76626 13.5434 8.35997 13.3698C6.61708 12.625 5.5 10.5422 5.5 8.75732Z" stroke="black" stroke-width="1.5"/> <path d="M14.0004 13.9993L20.5004 20.4993M14.0004 13.9993L6.39453 21.6053M14.0004 13.9993L21.6072 6.39258" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z"/>
    </svg>
  );
};
