import React from 'react';

interface ListArrowUpMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListArrowUpMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListArrowUpMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM16.9697 8.46967C17.2626 8.17678 17.7374 8.17678 18.0303 8.46967L20.5303 10.9697C20.8232 11.2626 20.8232 11.7374 20.5303 12.0303C20.2374 12.3232 19.7626 12.3232 19.4697 12.0303L18.25 10.8107V17C18.25 17.4142 17.9142 17.75 17.5 17.75C17.0858 17.75 16.75 17.4142 16.75 17V10.8107L15.5303 12.0303C15.2374 12.3232 14.7626 12.3232 14.4697 12.0303C14.1768 11.7374 14.1768 11.2626 14.4697 10.9697L16.9697 8.46967ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H11C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H12C12.4142 15.25 12.75 15.5858 12.75 16C12.75 16.4142 12.4142 16.75 12 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"/>
    </svg>
  );
};
