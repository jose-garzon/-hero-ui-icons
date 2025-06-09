import React from 'react';

interface MinimizeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Minimize = ({
  size = 24,
  color,
  className,
  ...props
}: MinimizeProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 22L9 15M9 15H3.14286M9 15V20.8571" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M22 2L15 9M15 9H20.8571M15 9V3.14286" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
