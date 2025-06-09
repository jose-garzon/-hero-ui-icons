import React from 'react';

interface ListArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListArrowDown = ({
  size = 24,
  color,
  className,
  ...props
}: ListArrowDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15 17.5L17.5 20M17.5 20L20 17.5M17.5 20V14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M21 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M21 10L3 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 14L3 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 18H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
