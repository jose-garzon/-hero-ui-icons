import React from 'react';

interface UserBlockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UserBlock = ({
  size = 24,
  color,
  className,
  ...props
}: UserBlockProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="6" r="4" stroke="black" stroke-width="1.5"/> <path d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5" stroke="black" stroke-width="1.5"/> <path d="M15.1715 18.8284C15.8954 19.5523 16.8954 20 18 20C20.2091 20 22 18.2091 22 16C22 14.8954 21.5523 13.8954 20.8284 13.1715M15.1715 18.8284C14.4477 18.1045 14 17.1046 14 16C14 13.7909 15.7909 12 18 12C19.1046 12 20.1045 12.4477 20.8284 13.1715M15.1715 18.8284L20.8284 13.1715" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
  );
};
