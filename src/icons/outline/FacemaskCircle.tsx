import React from 'react';

interface FacemaskCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const FacemaskCircle = ({
  size = 24,
  color,
  className,
  ...props
}: FacemaskCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M16.5 20.4996L17 14.9996L13.857 13.7424C12.6649 13.2656 11.3351 13.2656 10.143 13.7424L7 14.9996L7.5 20.4996" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 15L2.5 13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 15L21.5 13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <ellipse cx="15" cy="10.5" rx="1" ry="1.5"/> <ellipse cx="9" cy="10.5" rx="1" ry="1.5"/>
    </svg>
  );
};
