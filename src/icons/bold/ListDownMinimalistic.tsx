import React from 'react';

interface ListDownMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListDownMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListDownMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H20C20.4142 10.25 20.75 10.5858 20.75 11C20.75 11.4142 20.4142 11.75 20 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0119 18.5694C17.2928 18.8102 17.7072 18.8102 17.9881 18.5694L21.4881 15.5694C21.8026 15.2999 21.839 14.8264 21.5694 14.5119C21.2999 14.1974 20.8264 14.161 20.5119 14.4306L17.5 17.0122L14.4881 14.4306C14.1736 14.161 13.7001 14.1974 13.4306 14.5119C13.161 14.8264 13.1974 15.2999 13.5119 15.5694L17.0119 18.5694Z"/>
    </svg>
  );
};
