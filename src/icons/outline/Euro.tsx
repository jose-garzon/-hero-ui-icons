import React from 'react';

interface EuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Euro = ({
  size = 24,
  color,
  className,
  ...props
}: EuroProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M15 6.80269C14.1175 6.29218 13.0929 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C13.0929 18 14.1175 17.7078 15 17.1973" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 10.5H10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 13.5H10" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
