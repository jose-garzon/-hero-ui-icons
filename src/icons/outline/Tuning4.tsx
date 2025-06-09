import React from 'react';

interface Tuning4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Tuning4 = ({
  size = 24,
  color,
  className,
  ...props
}: Tuning4Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="2" transform="rotate(-90 12 12)" stroke="black" stroke-width="1.5"/> <circle cx="10" cy="20" r="2" transform="rotate(-90 10 20)" stroke="black" stroke-width="1.5"/> <circle cx="2" cy="2" r="2" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 16 6)" stroke="black" stroke-width="1.5"/> <path d="M16 12L19 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 20L19 20" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10 4L5 4" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 12L8 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 20L6 20" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 4L18 4" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
