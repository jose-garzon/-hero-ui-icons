import React from 'react';

interface DangerCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const DangerCircle = ({
  size = 24,
  color,
  className,
  ...props
}: DangerCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M12 7V13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="12" cy="16" r="1"/>
    </svg>
  );
};
