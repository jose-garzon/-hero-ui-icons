import React from 'react';

interface LogoutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Logout = ({
  size = 24,
  color,
  className,
  ...props
}: LogoutProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4697 8.46967C16.1768 8.76256 16.1768 9.23744 16.4697 9.53033L18.1893 11.25H10C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75H18.1893L16.4697 14.4697C16.1768 14.7626 16.1768 15.2374 16.4697 15.5303C16.7626 15.8232 17.2374 15.8232 17.5303 15.5303L20.5303 12.5303C20.8232 12.2374 20.8232 11.7626 20.5303 11.4697L17.5303 8.46967C17.2374 8.17678 16.7626 8.17678 16.4697 8.46967Z"/> <path d="M4 12C4 16.4183 7.58172 20 12 20V16.25C12 15.3072 12 14.8358 11.7071 14.5429C11.4142 14.25 10.9428 14.25 10 14.25Lnan nanL10 14.25C8.75736 14.25 7.75 13.2426 7.75 12C7.75 10.7574 8.75736 9.75 10 9.75Lnan nanL10 9.75C10.9428 9.75 11.4142 9.75 11.7071 9.45711C12 9.16421 12 8.69281 12 7.75V4C7.58172 4 4 7.58172 4 12Z"/>
    </svg>
  );
};
