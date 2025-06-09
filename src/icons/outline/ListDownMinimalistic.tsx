import React from 'react';

interface ListDownMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListDownMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListDownMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 11L3 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 16H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 15L17.5 18L21 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
