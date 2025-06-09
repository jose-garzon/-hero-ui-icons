import React from 'react';

interface List1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const List1 = ({
  size = 24,
  color,
  className,
  ...props
}: List1Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 7L4 7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 12L4 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9 17H4" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
