import React from 'react';

interface KeyMinimalisticSquare3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const KeyMinimalisticSquare3 = ({
  size = 24,
  color,
  className,
  ...props
}: KeyMinimalisticSquare3Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8.5 10.25C7.5335 10.25 6.75 11.0335 6.75 12C6.75 12.9665 7.5335 13.75 8.5 13.75C9.4665 13.75 10.25 12.9665 10.25 12C10.25 11.0335 9.4665 10.25 8.5 10.25Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM11.663 11.25C11.3245 9.81665 10.0368 8.75 8.5 8.75C6.70507 8.75 5.25 10.2051 5.25 12C5.25 13.7949 6.70507 15.25 8.5 15.25C10.0368 15.25 11.3245 14.1834 11.663 12.75H14.75V13.5C14.75 13.9142 15.0858 14.25 15.5 14.25C15.9142 14.25 16.25 13.9142 16.25 13.5V12.75H17C17.1381 12.75 17.25 12.8619 17.25 13V14C17.25 14.4142 17.5858 14.75 18 14.75C18.4142 14.75 18.75 14.4142 18.75 14V13C18.75 12.0335 17.9665 11.25 17 11.25H11.663Z"/>
    </svg>
  );
};
