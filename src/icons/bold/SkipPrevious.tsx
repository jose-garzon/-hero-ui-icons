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
      <path d="M8.09015 14.6474C6.30328 13.4935 6.30328 10.5065 8.09015 9.35258L18.8792 2.38548C20.6158 1.26402 22.75 2.72368 22.75 5.0329V18.9671C22.75 21.2763 20.6158 22.736 18.8792 21.6145L8.09015 14.6474Z"/> <path d="M2 5C2 4.58579 2.33579 4.25 2.75 4.25C3.16421 4.25 3.5 4.58579 3.5 5V19C3.5 19.4142 3.16421 19.75 2.75 19.75C2.33579 19.75 2 19.4142 2 19V5Z"/>
    </svg>
  );
};
