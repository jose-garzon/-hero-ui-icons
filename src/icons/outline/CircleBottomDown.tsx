import React from 'react';

interface CircleBottomDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CircleBottomDown = ({
  size = 24,
  color,
  className,
  ...props
}: CircleBottomDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10 14L2 22M2 22H8M2 22V16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
