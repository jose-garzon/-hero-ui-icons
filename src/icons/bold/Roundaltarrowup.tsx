import React from 'react';

interface RoundaltarrowupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Roundaltarrowup = ({
  size = 24,
  color,
  className,
  ...props
}: RoundaltarrowupProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 9.75C12.1989 9.75 12.3897 9.82902 12.5303 9.96967L15.5303 12.9697C15.8232 13.2626 15.8232 13.7374 15.5303 14.0303C15.2374 14.3232 14.7626 14.3232 14.4697 14.0303L12 11.5607L9.53033 14.0303C9.23744 14.3232 8.76256 14.3232 8.46967 14.0303C8.17678 13.7374 8.17678 13.2626 8.46967 12.9697L11.4697 9.96967C11.6103 9.82902 11.8011 9.75 12 9.75Z"/>
    </svg>
  );
};
