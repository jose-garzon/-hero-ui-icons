import React from 'react';

interface KeyMinimalistic2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const KeyMinimalistic2 = ({
  size = 24,
  color,
  className,
  ...props
}: KeyMinimalistic2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="15" cy="9" r="7" stroke="black" stroke-width="1.5"/> <circle cx="15" cy="9" r="2" stroke="black" stroke-width="1.5"/> <path d="M3.5 20.5L9.5 14.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6 21L4.5 19.5M6.5 17.5L8 19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
