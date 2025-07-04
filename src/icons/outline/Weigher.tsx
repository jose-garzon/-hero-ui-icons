import React from 'react';

interface WeigherProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Weigher = ({
  size = 24,
  color,
  className,
  ...props
}: WeigherProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="black" stroke-width="1.5"/> <path d="M8 18H16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16.4117 9.97078L17.0774 8.30671C17.5516 7.12125 16.8086 5.80104 15.5492 5.59114L15.1238 5.52023C13.0557 5.17555 10.9447 5.17555 8.87663 5.52023L8.45119 5.59114C7.19178 5.80104 6.44885 7.12125 6.92303 8.30671L7.58866 9.97078C7.82443 10.5602 8.45936 10.8848 9.07523 10.7309C10.9957 10.2508 13.0047 10.2508 14.9252 10.7309C15.5411 10.8848 16.176 10.5602 16.4117 9.97078Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10.1794 9.92856L9.50439 8.0459" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
