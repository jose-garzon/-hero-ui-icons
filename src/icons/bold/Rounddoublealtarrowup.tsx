import React from 'react';

interface RounddoublealtarrowupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Rounddoublealtarrowup = ({
  size = 24,
  color,
  className,
  ...props
}: RounddoublealtarrowupProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.46967 14.9697C8.17678 15.2626 8.17678 15.7374 8.46967 16.0303C8.76256 16.3232 9.23744 16.3232 9.53033 16.0303L12 13.5607L14.4697 16.0303C14.7626 16.3232 15.2374 16.3232 15.5303 16.0303C15.8232 15.7374 15.8232 15.2626 15.5303 14.9697L12.5303 11.9697C12.2374 11.6768 11.7626 11.6768 11.4697 11.9697L8.46967 14.9697ZM8.46967 12.0303C8.17678 11.7374 8.17678 11.2626 8.46967 10.9697L11.4697 7.96967C11.7626 7.67678 12.2374 7.67678 12.5303 7.96967L15.5303 10.9697C15.8232 11.2626 15.8232 11.7374 15.5303 12.0303C15.2374 12.3232 14.7626 12.3232 14.4697 12.0303L12 9.56066L9.53033 12.0303C9.23744 12.3232 8.76256 12.3232 8.46967 12.0303Z"/>
    </svg>
  );
};
