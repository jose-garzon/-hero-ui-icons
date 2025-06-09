import React from 'react';

interface SortFromTopToBottomProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SortFromTopToBottom = ({
  size = 24,
  color,
  className,
  ...props
}: SortFromTopToBottomProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 16L13 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6 11H13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 6L13 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 4L17 20L20 16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
