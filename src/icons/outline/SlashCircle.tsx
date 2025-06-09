import React from 'react';

interface SlashCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SlashCircle = ({
  size = 24,
  color,
  className,
  ...props
}: SlashCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M13.2939 7.17041L11.9998 12L10.7058 16.8297" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
