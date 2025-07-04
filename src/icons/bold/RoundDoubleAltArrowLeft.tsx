import React from 'react';

interface RoundDoubleAltArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RoundDoubleAltArrowLeft = ({
  size = 24,
  color,
  className,
  ...props
}: RoundDoubleAltArrowLeftProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM14.9697 8.46967C15.2626 8.17678 15.7374 8.17678 16.0303 8.46967C16.3232 8.76256 16.3232 9.23744 16.0303 9.53033L13.5607 12L16.0303 14.4697C16.3232 14.7626 16.3232 15.2374 16.0303 15.5303C15.7374 15.8232 15.2626 15.8232 14.9697 15.5303L11.9697 12.5303C11.6768 12.2374 11.6768 11.7626 11.9697 11.4697L14.9697 8.46967ZM12.0303 8.46967C11.7374 8.17678 11.2626 8.17678 10.9697 8.46967L7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L10.9697 15.5303C11.2626 15.8232 11.7374 15.8232 12.0303 15.5303C12.3232 15.2374 12.3232 14.7626 12.0303 14.4697L9.56066 12L12.0303 9.53033C12.3232 9.23744 12.3232 8.76256 12.0303 8.46967Z"/>
    </svg>
  );
};
