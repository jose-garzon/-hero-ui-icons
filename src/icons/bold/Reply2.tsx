import React from 'react';

interface Reply2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Reply2 = ({
  size = 24,
  color,
  className,
  ...props
}: Reply2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 6.25C19.9142 6.25 20.25 6.58579 20.25 7C20.25 9.24444 19.298 10.7196 18.0632 11.6087C16.8667 12.4702 15.4534 12.75 14.5 12.75L6.31066 12.75L10.0303 16.4697C10.3232 16.7626 10.3232 17.2374 10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967C10.3232 6.76256 10.3232 7.23744 10.0303 7.53033L6.31066 11.25L14.5 11.25C15.2133 11.25 16.3 11.0298 17.1868 10.3913C18.0353 9.7804 18.75 8.75556 18.75 7C18.75 6.58579 19.0858 6.25 19.5 6.25Z"/>
    </svg>
  );
};
