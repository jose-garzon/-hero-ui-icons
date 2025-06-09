import React from 'react';

interface MinimalisticMagniferZoomOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MinimalisticMagniferZoomOut = ({
  size = 24,
  color,
  className,
  ...props
}: MinimalisticMagniferZoomOutProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="11.5" cy="11.5" r="9.5" stroke="black" stroke-width="1.5"/> <path d="M9 11.5H11.5H14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 20L22 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
