import React from 'react';

interface TextUnderlineCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TextUnderlineCircle = ({
  size = 24,
  color,
  className,
  ...props
}: TextUnderlineCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="black" stroke-width="1.5"/> <path d="M8 17H16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 7V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
