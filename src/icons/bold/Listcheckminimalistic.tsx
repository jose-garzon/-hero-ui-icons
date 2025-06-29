import React from 'react';

interface ListcheckminimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Listcheckminimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListcheckminimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.75C21.1642 6 21.5 6.33579 21.5 6.75C21.5 7.16421 21.1642 7.5 20.75 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM21.2113 11.1586C21.5379 11.4134 21.5961 11.8847 21.3414 12.2113L17.4414 17.2113C17.3022 17.3897 17.0899 17.4958 16.8636 17.4999C16.6373 17.504 16.4213 17.4057 16.2757 17.2324L14.1757 14.7324C13.9093 14.4152 13.9504 13.9421 14.2676 13.6757C14.5848 13.4093 15.0579 13.4504 15.3243 13.7676L16.8284 15.5582L20.1586 11.2887C20.4134 10.9621 20.8847 10.9039 21.2113 11.1586ZM3 11.75C3 11.3358 3.33579 11 3.75 11H10.75C11.1642 11 11.5 11.3358 11.5 11.75C11.5 12.1642 11.1642 12.5 10.75 12.5H3.75C3.33579 12.5 3 12.1642 3 11.75ZM3 16.75C3 16.3358 3.33579 16 3.75 16H10.75C11.1642 16 11.5 16.3358 11.5 16.75C11.5 17.1642 11.1642 17.5 10.75 17.5H3.75C3.33579 17.5 3 17.1642 3 16.75Z"/>
    </svg>
  );
};
