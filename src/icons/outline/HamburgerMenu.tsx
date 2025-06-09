import React from 'react';

interface HamburgerMenuProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const HamburgerMenu = ({
  size = 24,
  color,
  className,
  ...props
}: HamburgerMenuProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 7L4 7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 12L4 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 17L4 17" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
