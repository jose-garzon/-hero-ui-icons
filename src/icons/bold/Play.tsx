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
      <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"/>
    </svg>
  );
};
