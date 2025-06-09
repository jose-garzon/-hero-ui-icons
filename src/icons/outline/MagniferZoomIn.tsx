import React from 'react';

interface MagniferZoomInProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MagniferZoomIn = ({
  size = 24,
  color,
  className,
  ...props
}: MagniferZoomInProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="11.5" cy="11.5" r="9.5" stroke="black" stroke-width="1.5"/> <path d="M18.5 18.5L22 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9 11.5H11.5M11.5 11.5H14M11.5 11.5V14M11.5 11.5V9" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
