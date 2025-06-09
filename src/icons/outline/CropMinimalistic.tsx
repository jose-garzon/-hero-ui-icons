import React from 'react';

interface CropMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CropMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: CropMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 19H13C9.22876 19 7.34315 19 6.17157 17.8284C5 16.6569 5 14.7712 5 11V2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 5H11C14.7712 5 16.6569 5 17.8284 6.17157C19 7.34315 19 9.22876 19 13V16M2 5H5M19 19V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
