import React from 'react';

interface AlarmRemoveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AlarmRemove = ({
  size = 24,
  color,
  className,
  ...props
}: AlarmRemoveProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="13" r="9" stroke="black" stroke-width="1.5"/> <path d="M15 13L12 13L9 13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3.5 4.5L7.50002 2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.5 4.5L16.5 2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
