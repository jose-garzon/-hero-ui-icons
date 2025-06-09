import React from 'react';

interface ListCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListCheck = ({
  size = 24,
  color,
  className,
  ...props
}: ListCheckProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14 16L16.1 18.5L20 13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M21 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M21 10L3 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 14H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 18H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
