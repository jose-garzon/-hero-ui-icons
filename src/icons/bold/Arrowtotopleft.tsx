import React from 'react';

interface ArrowtotopleftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Arrowtotopleft = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowtotopleftProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 10.0303C17.8232 9.73744 17.8232 9.26256 17.5303 8.96967L12.5303 3.96967C12.2374 3.67678 11.7626 3.67678 11.4697 3.96967L6.46967 8.96967C6.17678 9.26256 6.17678 9.73744 6.46967 10.0303C6.76256 10.3232 7.23744 10.3232 7.53033 10.0303L11.25 6.31066L11.25 14.5C11.25 15.2133 11.0298 16.3 10.3913 17.1868C9.7804 18.0353 8.75556 18.75 7 18.75C6.58579 18.75 6.25 19.0858 6.25 19.5C6.25 19.9142 6.58579 20.25 7 20.25C9.24444 20.25 10.7196 19.298 11.6087 18.0632C12.4702 16.8667 12.75 15.4534 12.75 14.5L12.75 6.31066L16.4697 10.0303C16.7626 10.3232 17.2374 10.3232 17.5303 10.0303Z"/>
    </svg>
  );
};
