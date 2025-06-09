import React from 'react';

interface RecordProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Record = ({
  size = 24,
  color,
  className,
  ...props
}: RecordProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10"/>
    </svg>
  );
};
