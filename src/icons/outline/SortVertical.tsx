import React from 'react';

interface SortVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SortVertical = ({
  size = 24,
  color,
  className,
  ...props
}: SortVerticalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
