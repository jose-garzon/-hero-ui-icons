import React from 'react';

interface InfoCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const InfoCircle = ({
  size = 24,
  color,
  className,
  ...props
}: InfoCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M12 17V11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)"/>
    </svg>
  );
};
