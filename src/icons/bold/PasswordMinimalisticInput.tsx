import React from 'react';

interface PasswordMinimalisticInputProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PasswordMinimalisticInput = ({
  size = 24,
  color,
  className,
  ...props
}: PasswordMinimalisticInputProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15.75 2C15.75 1.58579 15.4142 1.25 15 1.25C14.5858 1.25 14.25 1.58579 14.25 2V22C14.25 22.4142 14.5858 22.75 15 22.75C15.4142 22.75 15.75 22.4142 15.75 22V19.9944C18.3859 19.9668 19.8541 19.8028 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.8541 4.19724 18.3859 4.03321 15.75 4.00559V2Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 18.8284C4.34315 20 6.22876 20 10 20H13V12V4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284ZM13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"/>
    </svg>
  );
};
