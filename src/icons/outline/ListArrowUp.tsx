import React from 'react';

interface ListArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListArrowUp = ({
  size = 24,
  color,
  className,
  ...props
}: ListArrowUpProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M21 10L3 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 14L3 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 18H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 16.5L17.5 14M17.5 14L15 16.5M17.5 14V20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
