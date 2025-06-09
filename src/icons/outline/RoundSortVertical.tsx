import React from 'react';

interface RoundSortVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RoundSortVertical = ({
  size = 24,
  color,
  className,
  ...props
}: RoundSortVerticalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M9.5 8L9.5 16M9.5 16L7 13.25M9.5 16L12 13.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14.5 16L14.5 8M14.5 8L12 10.75M14.5 8L17 10.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
