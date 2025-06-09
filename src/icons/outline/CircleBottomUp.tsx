import React from 'react';

interface CircleBottomUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CircleBottomUp = ({
  size = 24,
  color,
  className,
  ...props
}: CircleBottomUpProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 21L11 13M11 13H5M11 13V19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
