import React from 'react';

interface MagniferProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Magnifer = ({
  size = 24,
  color,
  className,
  ...props
}: MagniferProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="11.5" cy="11.5" r="9.5" stroke="black" stroke-width="1.5"/> <path d="M18.5 18.5L22 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
