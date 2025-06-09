import React from 'react';

interface ArrowRightDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ArrowRightDown = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowRightDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6 6L18 18M18 18L18 9M18 18L9 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
