import React from 'react';

interface MouseMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MouseMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: MouseMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z" stroke="black" stroke-width="1.5"/> <path d="M12 5V8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
