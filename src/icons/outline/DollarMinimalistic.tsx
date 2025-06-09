import React from 'react';

interface DollarMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const DollarMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: DollarMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M12 17V17.5V18" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 6V6.5V7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
