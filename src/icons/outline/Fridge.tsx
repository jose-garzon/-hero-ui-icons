import React from 'react';

interface FridgeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Fridge = ({
  size = 24,
  color,
  className,
  ...props
}: FridgeProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21C8.22876 21 6.34315 21 5.17157 19.8284C4 18.6569 4 16.7712 4 13V10Z" stroke="black" stroke-width="1.5"/> <path d="M17 21V22H16V21M8 21V22H7V21" stroke="black" stroke-width="1.5" stroke-linejoin="round"/> <path d="M20 11.5H4" stroke="black" stroke-width="1.5"/> <path d="M17 7L17 9" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 14L17 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
