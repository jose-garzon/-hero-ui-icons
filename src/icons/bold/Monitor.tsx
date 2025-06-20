import React from 'react';

interface MonitorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Monitor = ({
  size = 24,
  color,
  className,
  ...props
}: MonitorProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8 17C5.17157 17 3.75736 17 2.87868 16.1213C2.30938 15.552 2.10893 14.7579 2.03835 13.5H21.9616C21.8911 14.7579 21.6906 15.552 21.1213 16.1213C20.2426 17 18.8284 17 16 17H12.75V21H16C16.4142 21 16.75 21.3358 16.75 21.75C16.75 22.1642 16.4142 22.5 16 22.5H8C7.58579 22.5 7.25 22.1642 7.25 21.75C7.25 21.3358 7.58579 21 8 21H11.25V17H8Z"/> <path d="M10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V11C22 11.5516 22 12.0494 21.9935 12.5H2.00652C2 12.0494 2 11.5516 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2Z"/>
    </svg>
  );
};
