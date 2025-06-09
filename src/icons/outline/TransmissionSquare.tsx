import React from 'react';

interface TransmissionSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TransmissionSquare = ({
  size = 24,
  color,
  className,
  ...props
}: TransmissionSquareProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8 9V15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 9V15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 12H13C13.9319 12 14.3978 12 14.7654 11.8478C15.2554 11.6448 15.6448 11.2554 15.8478 10.7654C16 10.3978 16 9.93188 16 9" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <rect x="2" y="2" rx="5" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
