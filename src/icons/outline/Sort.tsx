import React from 'react';

interface SortProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Sort = ({
  size = 24,
  color,
  className,
  ...props
}: SortProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 7L2 7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 12L5 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 17H8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
