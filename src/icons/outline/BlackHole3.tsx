import React from 'react';

interface BlackHole3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BlackHole3 = ({
  size = 24,
  color,
  className,
  ...props
}: BlackHole3Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="2" stroke="black" stroke-width="1.5"/> <path d="M12 10C17 10 16.6 22 9 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 12.3115C10 7.31152 22 7.71152 22 15.3115" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 12C14 17 2 16.6 2 9" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
