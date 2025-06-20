import React from 'react';

interface ArrowtotoprightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Arrowtotopright = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowtotoprightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967L11.4697 3.96967C11.7626 3.67678 12.2374 3.67678 12.5303 3.96967L17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303C17.2374 10.3232 16.7626 10.3232 16.4697 10.0303L12.75 6.31066L12.75 14.5C12.75 15.2133 12.9702 16.3 13.6087 17.1868C14.2196 18.0353 15.2444 18.75 17 18.75C17.4142 18.75 17.75 19.0858 17.75 19.5C17.75 19.9142 17.4142 20.25 17 20.25C14.7556 20.25 13.2804 19.298 12.3913 18.0632C11.5298 16.8667 11.25 15.4534 11.25 14.5L11.25 6.31066L7.53033 10.0303C7.23744 10.3232 6.76256 10.3232 6.46967 10.0303Z"/>
    </svg>
  );
};
