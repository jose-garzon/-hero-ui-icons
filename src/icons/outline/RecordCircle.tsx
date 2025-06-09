import React from 'react';

interface RecordCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RecordCircle = ({
  size = 24,
  color,
  className,
  ...props
}: RecordCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <circle cx="12" cy="12" r="4" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
