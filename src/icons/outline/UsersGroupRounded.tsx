import React from 'react';

interface UsersGroupRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UsersGroupRounded = ({
  size = 24,
  color,
  className,
  ...props
}: UsersGroupRoundedProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="9" cy="6" r="4" stroke="black" stroke-width="1.5"/> <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <ellipse cx="9" cy="17" rx="7" ry="4" stroke="black" stroke-width="1.5"/> <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
