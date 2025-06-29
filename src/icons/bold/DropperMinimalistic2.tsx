import React from 'react';

interface DropperMinimalistic2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const DropperMinimalistic2 = ({
  size = 24,
  color,
  className,
  ...props
}: DropperMinimalistic2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19 8V15.8831C19 16.6438 18.6809 17.3697 18.1203 17.8841C16.5867 19.2913 14.6891 20.0751 12.75 20.2356V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V20.2356C9.31089 20.0751 7.41327 19.2913 5.87966 17.8841C5.31911 17.3697 5 16.6438 5 15.8831V8C5 6.11438 5 5.17157 5.58579 4.58579C6.17157 4 7.11438 4 9 4H15C16.8856 4 17.8284 4 18.4142 4.58579C19 5.17157 19 6.11438 19 8ZM12 12.9999C13.1046 12.9999 14 12.0672 14 10.9166C14 10.1967 13.217 9.23583 12.6309 8.61737C12.2839 8.25124 11.7161 8.25124 11.3691 8.61737C10.783 9.23583 10 10.1967 10 10.9166C10 12.0672 10.8954 12.9999 12 12.9999ZM9.25 16C9.25 15.5858 9.58579 15.25 10 15.25H14C14.4142 15.25 14.75 15.5858 14.75 16C14.75 16.4142 14.4142 16.75 14 16.75H10C9.58579 16.75 9.25 16.4142 9.25 16Z"/> <path d="M13.7325 3C13.3866 2.4022 12.7403 2 12 2C11.2597 2 10.6134 2.4022 10.2676 3L13.7325 3Z"/>
    </svg>
  );
};
