import React from 'react';

interface BowlingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Bowling = ({
  size = 24,
  color,
  className,
  ...props
}: BowlingProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <circle cx="12" cy="7" r="1.5" transform="rotate(-90 12 7)" stroke="black" stroke-width="1.5"/> <circle cx="12" cy="12" r="1.5" transform="rotate(-90 12 12)" stroke="black" stroke-width="1.5"/> <path d="M8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
