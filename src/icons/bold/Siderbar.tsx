import React from 'react';

interface SiderbarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Siderbar = ({
  size = 24,
  color,
  className,
  ...props
}: SiderbarProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 11V13C22 16.7712 22 18.6569 20.8284 19.8284C19.8541 20.8028 18.3859 20.9668 15.75 20.9944V3.00559C18.3859 3.03321 19.8541 3.19724 20.8284 4.17157C22 5.34315 22 7.22876 22 11Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H14H14.25L14.25 21H14H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3ZM4.75 10C4.75 9.58579 5.08579 9.25 5.5 9.25H11.5C11.9142 9.25 12.25 9.58579 12.25 10C12.25 10.4142 11.9142 10.75 11.5 10.75H5.5C5.08579 10.75 4.75 10.4142 4.75 10ZM5.75 14C5.75 13.5858 6.08579 13.25 6.5 13.25H10.5C10.9142 13.25 11.25 13.5858 11.25 14C11.25 14.4142 10.9142 14.75 10.5 14.75H6.5C6.08579 14.75 5.75 14.4142 5.75 14Z"/>
    </svg>
  );
};
