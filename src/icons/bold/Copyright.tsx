import React from 'react';

interface CopyrightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Copyright = ({
  size = 24,
  color,
  className,
  ...props
}: CopyrightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12.2857 8.75C10.2834 8.75 8.75 10.253 8.75 12C8.75 13.747 10.2834 15.25 12.2857 15.25C12.7974 15.25 13.281 15.1504 13.7168 14.9727C14.1003 14.8163 14.5381 15.0004 14.6945 15.384C14.8509 15.7675 14.6667 16.2052 14.2832 16.3616C13.669 16.6121 12.9931 16.75 12.2857 16.75C9.55414 16.75 7.25 14.6712 7.25 12C7.25 9.32875 9.55414 7.25 12.2857 7.25C12.9931 7.25 13.669 7.38791 14.2832 7.63836C14.6667 7.79477 14.8509 8.23249 14.6945 8.61604C14.5381 8.99958 14.1003 9.18372 13.7168 9.02731C13.281 8.84961 12.7974 8.75 12.2857 8.75Z"/>
    </svg>
  );
};
