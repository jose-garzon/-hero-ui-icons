import React from 'react';

interface MaximizeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Maximize = ({
  size = 24,
  color,
  className,
  ...props
}: MaximizeProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 15L2 22M2 22H7.85714M2 22V16.1429" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 9L22 2M22 2H16.1429M22 2V7.85714" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
