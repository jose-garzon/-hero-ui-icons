import React from 'react';

interface TrashBinMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TrashBinMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: TrashBinMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20.5001 6H3.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9.5 11L10 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14.5 11L14 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
