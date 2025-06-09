import React from 'react';

interface MusicNote2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MusicNote2 = ({
  size = 24,
  color,
  className,
  ...props
}: MusicNote2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M13 18V10V2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="9" cy="18" r="4" stroke="black" stroke-width="1.5"/> <path d="M19 8C15.6863 8 13 5.31371 13 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
