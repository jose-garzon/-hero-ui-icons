import React from 'react';

interface PlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Play = ({
  size = 24,
  color,
  className,
  ...props
}: PlayProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
