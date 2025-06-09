import React from 'react';

interface AltArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AltArrowRight = ({
  size = 24,
  color,
  className,
  ...props
}: AltArrowRightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 5L15 12L9 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
