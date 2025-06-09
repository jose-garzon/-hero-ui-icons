import React from 'react';

interface MenuDotsCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MenuDotsCircle = ({
  size = 24,
  color,
  className,
  ...props
}: MenuDotsCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8 12H8.00901M12.0045 12H12.0135M15.991 12H16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
