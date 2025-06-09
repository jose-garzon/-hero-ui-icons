import React from 'react';

interface LinkMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const LinkMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: LinkMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8.99991 11.9999H14.9999" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9 18H8C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6H9" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H15" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
