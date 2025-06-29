import React from 'react';

interface ChatroundcallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Chatroundcall = ({
  size = 24,
  color,
  className,
  ...props
}: ChatroundcallProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C10.4003 22 8.88837 21.6244 7.54753 20.9565C7.19121 20.7791 6.78393 20.72 6.39939 20.8229L4.17335 21.4185C3.20701 21.677 2.32295 20.793 2.58151 19.8267L3.17712 17.6006C3.28001 17.2161 3.22094 16.8088 3.04346 16.4525C2.37562 15.1116 2 13.5997 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V8C11.25 7.58579 11.5858 7.25 12 7.25ZM8.75 10C8.75 9.58579 8.41421 9.25 8 9.25C7.58579 9.25 7.25 9.58579 7.25 10V14C7.25 14.4142 7.58579 14.75 8 14.75C8.41421 14.75 8.75 14.4142 8.75 14V10ZM16 9.25C16.4142 9.25 16.75 9.58579 16.75 10V14C16.75 14.4142 16.4142 14.75 16 14.75C15.5858 14.75 15.25 14.4142 15.25 14V10C15.25 9.58579 15.5858 9.25 16 9.25Z"/>
    </svg>
  );
};
