import React from 'react';

interface DocumentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Document = ({
  size = 24,
  color,
  className,
  ...props
}: DocumentProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V9C20 7.34315 18.6569 6 17 6H5C4.44772 6 4 5.55228 4 5ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM7.25 15.5C7.25 15.0858 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 15.0858 14.25 15.5C14.25 15.9142 13.9142 16.25 13.5 16.25H8C7.58579 16.25 7.25 15.9142 7.25 15.5Z"/> <path d="M4.40879 4.0871C4.75727 4.24338 5 4.59334 5 5H17C17.3453 5 17.6804 5.04375 18 5.12602V4.30604C18 3.08894 16.922 2.15402 15.7172 2.32614L4.91959 3.86865C4.72712 3.89615 4.55271 3.97374 4.40879 4.0871Z"/>
    </svg>
  );
};
