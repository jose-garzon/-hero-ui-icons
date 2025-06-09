import React from 'react';

interface AltArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AltArrowUp = ({
  size = 24,
  color,
  className,
  ...props
}: AltArrowUpProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.3704 8.16485L18.8001 14.7953C19.2013 15.2091 18.9581 16 18.4297 16H5.5703C5.04189 16 4.79869 15.2091 5.1999 14.7953L11.6296 8.16485C11.8427 7.94505 12.1573 7.94505 12.3704 8.16485Z"/>
    </svg>
  );
};
