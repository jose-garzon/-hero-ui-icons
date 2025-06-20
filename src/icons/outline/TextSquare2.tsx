import React from 'react';

interface TextSquare2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TextSquare2 = ({
  size = 24,
  color,
  className,
  ...props
}: TextSquare2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21 9.3C20.9424 6.78787 20.702 5.32056 19.6974 4.31802C18.3768 3 16.2512 3 12 3C7.74882 3 5.62323 3 4.30256 4.31802C3.298 5.32056 3.05755 6.78787 3 9.3M21 14.7C20.9424 17.2121 20.702 18.6794 19.6974 19.682C18.3768 21 16.2512 21 12 21C7.74882 21 5.62323 21 4.30256 19.682C3.29801 18.6794 3.05756 17.2121 3 14.7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 8H16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 16L12 8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 12H20" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4 12H2" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
