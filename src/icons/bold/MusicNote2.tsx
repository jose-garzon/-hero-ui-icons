import React from 'react';

interface MusicNote2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MusicNote2 = ({
  size = 24,
  color,
  className,
  ...props
}: MusicNote2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25C12.5858 1.25 12.25 1.58579 12.25 2V14.5359C11.4003 13.7384 10.2572 13.25 9 13.25C6.37665 13.25 4.25 15.3766 4.25 18C4.25 20.6234 6.37665 22.75 9 22.75C11.6234 22.75 13.75 20.6234 13.75 18V6.243C14.9875 7.77225 16.8795 8.75 19 8.75C19.4142 8.75 19.75 8.41421 19.75 8C19.75 7.58579 19.4142 7.25 19 7.25C16.1005 7.25 13.75 4.8995 13.75 2Z"/>
    </svg>
  );
};
