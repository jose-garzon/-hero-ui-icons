import React from 'react';

interface WomenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Women = ({
  size = 24,
  color,
  className,
  ...props
}: WomenProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.7497 15.9603C16.2632 15.5862 19 12.6127 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.6125 7.73654 15.5859 11.2497 15.9603V17.75H9.5C9.08579 17.75 8.75 18.0858 8.75 18.5C8.75 18.9142 9.08579 19.25 9.5 19.25H11.2498L11.25 22.0001C11.25 22.4143 11.5858 22.75 12.0001 22.75C12.4143 22.75 12.75 22.4142 12.75 21.9999L12.7498 19.25H14.5C14.9142 19.25 15.25 18.9142 15.25 18.5C15.25 18.0858 14.9142 17.75 14.5 17.75H12.7497V15.9603Z"/>
    </svg>
  );
};
