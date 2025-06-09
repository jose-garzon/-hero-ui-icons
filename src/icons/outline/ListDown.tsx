import React from 'react';

interface ListDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListDown = ({
  size = 24,
  color,
  className,
  ...props
}: ListDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M21 10L3 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 14H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 18H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 15L17.5 18L21 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
