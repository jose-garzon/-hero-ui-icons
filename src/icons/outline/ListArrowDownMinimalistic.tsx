import React from 'react';

interface ListArrowDownMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListArrowDownMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListArrowDownMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 16L3 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 11L3 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 14.5L17.5 17M17.5 17L20 14.5M17.5 17V9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
