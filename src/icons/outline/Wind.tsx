import React from 'react';

interface WindProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Wind = ({
  size = 24,
  color,
  className,
  ...props
}: WindProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 8H9.5C10.8807 8 12 6.88071 12 5.5C12 4.11929 10.8807 3 9.5 3C8.11929 3 7 4.11929 7 5.5V5.85714" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4 14H18.5C20.433 14 22 15.567 22 17.5C22 19.433 20.433 21 18.5 21C16.567 21 15 19.433 15 17.5V17" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 11H18.5C20.433 11 22 9.433 22 7.5C22 5.567 20.433 4 18.5 4C16.567 4 15 5.567 15 7.5V8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
