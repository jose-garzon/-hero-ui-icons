import React from 'react';

interface RoundArrowRightUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RoundArrowRightUp = ({
  size = 24,
  color,
  className,
  ...props
}: RoundArrowRightUpProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M9 15L15 9M15 9H10.5M15 9V13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
