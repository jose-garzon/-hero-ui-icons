import React from 'react';

interface UploadTrack2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UploadTrack2 = ({
  size = 24,
  color,
  className,
  ...props
}: UploadTrack2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M13 15V11V7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="11" cy="15" r="2" stroke="black" stroke-width="1.5"/> <path d="M16 10C14.3431 10 13 8.65685 13 7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 21.8C13.3538 21.9311 12.6849 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
