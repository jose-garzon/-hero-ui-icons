import React from 'react';

interface AltArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AltArrowDown = ({
  size = 24,
  color,
  className,
  ...props
}: AltArrowDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 9L12 15L5 9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
