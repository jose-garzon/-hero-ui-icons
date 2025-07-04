import React from 'react';

interface StretchingRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const StretchingRound = ({
  size = 24,
  color,
  className,
  ...props
}: StretchingRoundProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="14.5" cy="4.5" r="2.5" stroke="black" stroke-width="1.5"/> <path d="M19 21.9959V18.0489C19 16.273 17.395 14.9199 15.6265 15.2047M7.94806 13.4348L7.92328 13.4109C6.88143 12.404 7.6864 10.7852 8.5932 10.1427C9.5 9.50016 13.3451 8.50016 13.3451 13.4345C13.3451 18.129 9.69442 22.0003 5 22.0003" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
