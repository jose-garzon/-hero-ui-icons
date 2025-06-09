import React from 'react';

interface SkipNextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SkipNext = ({
  size = 24,
  color,
  className,
  ...props
}: SkipNextProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.6598 9.35258C18.4467 10.5065 18.4467 13.4935 16.6598 14.6474L5.87083 21.6145C4.13419 22.736 2 21.2763 2 18.9671L2 5.0329C2 2.72368 4.13419 1.26402 5.87083 2.38548L16.6598 9.35258Z" stroke="black" stroke-width="1.5"/> <path d="M22 5V19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
