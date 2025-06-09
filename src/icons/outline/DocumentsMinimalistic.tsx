import React from 'react';

interface DocumentsMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const DocumentsMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: DocumentsMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" stroke="black" stroke-width="1.5"/> <path d="M9 13H15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9 9H15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9 17H12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 19V5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 19V5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
