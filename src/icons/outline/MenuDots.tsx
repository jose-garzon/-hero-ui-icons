import React from 'react';

interface MenuDotsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MenuDots = ({
  size = 24,
  color,
  className,
  ...props
}: MenuDotsProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="5" cy="12" r="2" stroke="black" stroke-width="1.5"/> <circle cx="12" cy="12" r="2" stroke="black" stroke-width="1.5"/> <circle cx="19" cy="12" r="2" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
