import React from 'react';

interface RewindForwardCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RewindForwardCircle = ({
  size = 24,
  color,
  className,
  ...props
}: RewindForwardCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.436 7.46105C13.0989 7.22029 12.6305 7.29836 12.3898 7.63542C12.149 7.97248 12.2271 8.44089 12.5641 8.68165L15.7857 10.9828C16.4836 11.4813 16.4836 12.5186 15.7857 13.0171L12.5641 15.3182C12.2271 15.5589 12.149 16.0274 12.3898 16.3644C12.6305 16.7015 13.0989 16.7795 13.436 16.5388L16.6575 14.2377C18.193 13.1409 18.193 10.8589 16.6575 9.76215L13.436 7.46105ZM7.5 15.1318V8.86887C7.5 8.07017 8.39015 7.59378 9.0547 8.03682L13.7519 11.1683C14.3457 11.5641 14.3457 12.4366 13.7519 12.8324L9.0547 15.9639C8.39014 16.4069 7.5 15.9305 7.5 15.1318Z"/>
    </svg>
  );
};
