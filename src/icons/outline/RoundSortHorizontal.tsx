import React from 'react';

interface RoundSortHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RoundSortHorizontal = ({
  size = 24,
  color,
  className,
  ...props
}: RoundSortHorizontalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M16 9.5L8 9.5M8 9.5L10.75 7M8 9.5L10.75 12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 14.5L16 14.5M16 14.5L13.25 12M16 14.5L13.25 17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
