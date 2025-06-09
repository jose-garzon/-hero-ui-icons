import React from 'react';

interface TargetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Target = ({
  size = 24,
  color,
  className,
  ...props
}: TargetProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" stroke-width="1.5"/> <path d="M2 12L5 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 12L22 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 22L12 19" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 5L12 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 12H12H14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 14L12 12L12 10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
