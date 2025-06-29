import React from 'react';

interface Forward2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Forward2 = ({
  size = 24,
  color,
  className,
  ...props
}: Forward2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19.5 12L14.5 17M19.5 12L14.5 7M19.5 12L9.5 12C7.83333 12 4.5 11 4.5 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
