import React from 'react';

interface RoundarrowrightupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Roundarrowrightup = ({
  size = 24,
  color,
  className,
  ...props
}: RoundarrowrightupProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.75 9C9.75 8.58579 10.0858 8.25 10.5 8.25H15C15.4142 8.25 15.75 8.58579 15.75 9V13.5C15.75 13.9142 15.4142 14.25 15 14.25C14.5858 14.25 14.25 13.9142 14.25 13.5V10.8107L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L13.1893 9.75H10.5C10.0858 9.75 9.75 9.41421 9.75 9Z"/>
    </svg>
  );
};
