import React from 'react';

interface ListArrowUpMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListArrowUpMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListArrowUpMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 11L3 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 16H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 11.5L17.5 9M17.5 9L20 11.5M17.5 9V17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
