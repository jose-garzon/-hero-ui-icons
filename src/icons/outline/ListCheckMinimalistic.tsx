import React from 'react';

interface ListCheckMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListCheckMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListCheckMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 11L3 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 16H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 13.5L16.1 16L20 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
