import React from 'react';

interface ListUpMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ListUpMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: ListUpMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 11L3 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 16H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 18L17.5 15L21 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
