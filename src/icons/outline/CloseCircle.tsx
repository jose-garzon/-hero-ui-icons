import React from 'react';

interface CloseCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CloseCircle = ({
  size = 24,
  color,
  className,
  ...props
}: CloseCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
