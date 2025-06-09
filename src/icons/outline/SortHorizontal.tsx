import React from 'react';

interface SortHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SortHorizontal = ({
  size = 24,
  color,
  className,
  ...props
}: SortHorizontalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M18 8L6 8M6 8L10.125 4M6 8L10.125 12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6 16L18 16M18 16L13.875 12M18 16L13.875 20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
