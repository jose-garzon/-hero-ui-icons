import React from 'react';

interface ReorderProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Reorder = ({
  size = 24,
  color,
  className,
  ...props
}: ReorderProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 10L5 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 14L5 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 6L5 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 18L5 18" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
