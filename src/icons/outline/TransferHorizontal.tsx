import React from 'react';

interface TransferHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TransferHorizontal = ({
  size = 24,
  color,
  className,
  ...props
}: TransferHorizontalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 10L4 10L9.5 4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4 14L20 14L14.5 20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
