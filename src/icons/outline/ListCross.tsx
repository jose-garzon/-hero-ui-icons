import React from 'react';

interface ListCrossProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListCross = ({
  size = 24,
  color,
  className,
  ...props
}: ListCrossProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15 18.5L20 13.5M20 18.5L15 13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M21 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M21 10L3 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 14L3 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 18H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
