import React from 'react';

interface SkipPreviousProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SkipPrevious = ({
  size = 24,
  color,
  className,
  ...props
}: SkipPreviousProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7.34016 9.35258C5.55328 10.5065 5.55328 13.4935 7.34015 14.6474L18.1292 21.6145C19.8658 22.736 22 21.2763 22 18.9671L22 5.0329C22 2.72368 19.8658 1.26402 18.1292 2.38548L7.34016 9.35258Z" stroke="black" stroke-width="1.5"/> <path d="M2 5V19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
