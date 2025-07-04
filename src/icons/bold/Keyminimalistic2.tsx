import React from 'react';

interface Keyminimalistic2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Keyminimalistic2 = ({
  size = 24,
  color,
  className,
  ...props
}: Keyminimalistic2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 10.6628 8.57979 12.1902 9.54824 13.3911L3.96995 18.9694L2.96967 19.9697C2.67678 20.2626 2.67678 20.7374 2.96967 21.0303C3.26256 21.3232 3.73744 21.3232 4.03033 21.0303L4.5 20.5607L5.46967 21.5303C5.76256 21.8232 6.23744 21.8232 6.53033 21.5303C6.82322 21.2374 6.82322 20.7626 6.53033 20.4697L5.56066 19.5L6.5 18.5607L7.46967 19.5303C7.76256 19.8232 8.23744 19.8232 8.53033 19.5303C8.82322 19.2374 8.82322 18.7626 8.53033 18.4697L7.56066 17.5L10.6089 14.4518C11.8098 15.4202 13.3372 16 15 16ZM15 11C16.1046 11 17 10.1046 17 9C17 7.89543 16.1046 7 15 7C13.8954 7 13 7.89543 13 9C13 10.1046 13.8954 11 15 11Z"/>
    </svg>
  );
};
