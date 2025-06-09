import React from 'react';

interface ListProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const List = ({
  size = 24,
  color,
  className,
  ...props
}: ListProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 17H11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4 12L11 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4 7L11 7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 4L17 20M17 4L14 8M17 4L20 8M17 20L20 16M17 20L14 16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
