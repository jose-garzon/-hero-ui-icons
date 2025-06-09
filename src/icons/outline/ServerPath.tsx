import React from 'react';

interface ServerPathProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ServerPath = ({
  size = 24,
  color,
  className,
  ...props
}: ServerPathProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 19H14M2 19H10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 17V14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="12" cy="19" r="2" stroke="black" stroke-width="1.5"/> <path d="M2 11C2 9.34315 3.34315 8 5 8H19C20.6569 8 22 9.34315 22 11C22 12.6569 20.6569 14 19 14H5C3.34315 14 2 12.6569 2 11Z" stroke="black" stroke-width="1.5"/> <path d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5C22 6.65685 20.6569 8 19 8H5C3.34315 8 2 6.65685 2 5Z" stroke="black" stroke-width="1.5"/> <path d="M13 5L19 5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M13 11L19 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="6" cy="5" r="1"/> <circle cx="6" cy="11" r="1"/>
    </svg>
  );
};
