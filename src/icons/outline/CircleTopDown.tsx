import React from 'react';

interface CircleTopDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CircleTopDown = ({
  size = 24,
  color,
  className,
  ...props
}: CircleTopDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21 3L12 12M12 12H17.3438M12 12V6.65625" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
