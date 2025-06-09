import React from 'react';

interface ArrowRightUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ArrowRightUp = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowRightUpProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6 18L18 6M18 6H9M18 6V15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
