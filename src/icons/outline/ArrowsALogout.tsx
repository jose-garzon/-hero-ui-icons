import React from 'react';

interface ArrowsALogoutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ArrowsALogout = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowsALogoutProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 12H20M20 12L17 9M20 12L17 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
