import React from 'react';

interface MapArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MapArrowDown = ({
  size = 24,
  color,
  className,
  ...props
}: MapArrowDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3.16496 4.49747L10.5275 21.0072C11.1178 22.3309 12.8822 22.3309 13.4725 21.0072L20.835 4.49747C21.5021 3.00163 20.0209 1.45006 18.6331 2.19099L12.7294 5.34303C12.2702 5.58818 11.7298 5.58818 11.2706 5.34303L5.36689 2.19099C3.97914 1.45007 2.49789 3.00163 3.16496 4.49747Z"/>
    </svg>
  );
};
