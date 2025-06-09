import React from 'react';

interface AltarrowdownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Altarrowdown = ({
  size = 24,
  color,
  className,
  ...props
}: AltarrowdownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L11.6296 15.8351C11.8427 16.0549 12.1573 16.0549 12.3704 15.8351Z"/>
    </svg>
  );
};
