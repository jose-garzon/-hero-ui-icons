import React from 'react';

interface UserRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserRounded = ({
  size = 24,
  color,
  className,
  ...props
}: UserRoundedProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="6" r="4"/> <ellipse cx="12" cy="17" rx="7" ry="4"/>
    </svg>
  );
};
