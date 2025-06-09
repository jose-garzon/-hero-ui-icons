import React from 'react';

interface Tuning3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Tuning3 = ({
  size = 24,
  color,
  className,
  ...props
}: Tuning3Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="2" transform="rotate(180 12 12)" stroke="black" stroke-width="1.5"/> <circle cx="20" cy="14" r="2" transform="rotate(180 20 14)" stroke="black" stroke-width="1.5"/> <circle cx="2" cy="2" r="2" transform="matrix(-1 8.74228e-08 8.74228e-08 1 6 8)" stroke="black" stroke-width="1.5"/> <path d="M12 8L12 5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 10L20 5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4 14L4 19" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 19L12 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 19L20 18" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4 5L4 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
