import React from 'react';

interface UserProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const User = ({
  size = 24,
  color,
  className,
  ...props
}: UserProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="6" r="4" stroke="black" stroke-width="1.5"/> <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
