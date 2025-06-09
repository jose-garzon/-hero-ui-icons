import React from 'react';

interface BugMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BugMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: BugMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V10Z" stroke="black" stroke-width="1.5"/> <path d="M19 13H22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 13H2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20.4999 7L18.7021 7.71909" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3.50012 7L5.29785 7.71909" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14.5 3.5L17 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9.5 3.5L7 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20.5 19.0002L18.5 18.2002" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3.5 19.0002L5.5 18.2002" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10.5 10.5H13.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10.5 15.5H13.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
