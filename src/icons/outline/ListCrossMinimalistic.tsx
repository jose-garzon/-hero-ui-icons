import React from 'react';

interface ListCrossMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListCrossMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListCrossMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 11L3 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 16H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 16L20 11M20 16L15 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
