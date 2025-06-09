import React from 'react';

interface ScissorsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Scissors = ({
  size = 24,
  color,
  className,
  ...props
}: ScissorsProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.4013 20.5L6 2M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7.59865 20.5L18 2M2 19C2 20.6569 3.34315 22 5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
