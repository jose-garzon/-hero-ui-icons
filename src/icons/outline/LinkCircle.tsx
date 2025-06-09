import React from 'react';

interface LinkCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const LinkCircle = ({
  size = 24,
  color,
  className,
  ...props
}: LinkCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14 12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 12C10 8.68629 12.6863 6 16 6C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
