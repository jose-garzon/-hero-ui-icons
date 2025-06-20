import React from 'react';

interface FaceScanCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const FaceScanCircle = ({
  size = 24,
  color,
  className,
  ...props
}: FaceScanCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <ellipse cx="15" cy="10.5" rx="1" ry="1.5"/> <ellipse cx="9" cy="10.5" rx="1" ry="1.5"/> <path d="M2.2002 10.0002C2.99557 6.08188 6.08198 2.99551 10.0003 2.2002" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2.2002 14C2.99557 17.9183 6.08198 21.0047 10.0003 21.8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M21.8001 10.0002C21.0047 6.08188 17.9183 2.99551 14 2.2002" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M21.8001 14C21.0047 17.9183 17.9183 21.0047 14 21.8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
