import React from 'react';

interface ListArrowDownMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListArrowDownMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListArrowDownMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303L20.5303 15.0303C20.8232 14.7374 20.8232 14.2626 20.5303 13.9697C20.2374 13.6768 19.7626 13.6768 19.4697 13.9697L18.25 15.1893V9C18.25 8.58579 17.9142 8.25 17.5 8.25C17.0858 8.25 16.75 8.58579 16.75 9V15.1893L15.5303 13.9697C15.2374 13.6768 14.7626 13.6768 14.4697 13.9697C14.1768 14.2626 14.1768 14.7374 14.4697 15.0303L16.9697 17.5303Z"/>
    </svg>
  );
};
