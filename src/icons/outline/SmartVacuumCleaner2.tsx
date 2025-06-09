import React from 'react';

interface SmartVacuumCleaner2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SmartVacuumCleaner2 = ({
  size = 24,
  color,
  className,
  ...props
}: SmartVacuumCleaner2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" stroke-width="1.5"/> <path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="black" stroke-width="1.5"/> <path d="M12 18V16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 22L4.5 19.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 22L19.5 19.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
