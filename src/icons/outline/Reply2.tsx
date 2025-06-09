import React from 'react';

interface Reply2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Reply2 = ({
  size = 24,
  color,
  className,
  ...props
}: Reply2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4.5 12L9.5 17M4.5 12L9.5 7M4.5 12L14.5 12C16.1667 12 19.5 11 19.5 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
