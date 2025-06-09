import React from 'react';

interface SortFromBottomToTopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SortFromBottomToTop = ({
  size = 24,
  color,
  className,
  ...props
}: SortFromBottomToTopProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 8H13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6 13H13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 18H13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 20V4L20 8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
