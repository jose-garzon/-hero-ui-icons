import React from 'react';

interface RoundarrowleftdownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Roundarrowleftdown = ({
  size = 24,
  color,
  className,
  ...props
}: RoundarrowleftdownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM14.25 15C14.25 15.4142 13.9142 15.75 13.5 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15V10.5C8.25 10.0858 8.58579 9.75 9 9.75C9.41421 9.75 9.75 10.0858 9.75 10.5V13.1893L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L10.8107 14.25H13.5C13.9142 14.25 14.25 14.5858 14.25 15Z"/>
    </svg>
  );
};
