import React from 'react';

interface LinkbrokenminimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Linkbrokenminimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: LinkbrokenminimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10 5.04877L10.367 4.70563C12.7995 2.43146 16.7432 2.43146 19.1757 4.70563C21.6081 6.9798 21.6081 10.667 19.1757 12.9411L16.9735 15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 18.9278L13.6345 19.2773C11.2123 21.5937 7.25434 21.5644 4.83209 19.248C2.43376 16.9546 2.37639 13.2153 4.74095 10.89L5.64594 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6.5869 3L7.49951 5.20521" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3.50189 6.08658L9.04972 8.79453" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
