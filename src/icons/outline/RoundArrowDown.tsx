import React from 'react';

interface RoundArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RoundArrowDown = ({
  size = 24,
  color,
  className,
  ...props
}: RoundArrowDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M12 8L12 16M12 16L15 13M12 16L9 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
