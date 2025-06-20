import React from 'react';

interface SliderVerticalMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SliderVerticalMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: SliderVerticalMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6 8C6 5.17157 6 3.75736 6.87868 2.87868C7.75736 2 9.17157 2 12 2C14.8284 2 16.2426 2 17.1213 2.87868C18 3.75736 18 5.17157 18 8V16C18 18.8284 18 20.2426 17.1213 21.1213C16.2426 22 14.8284 22 12 22C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V8Z" stroke="black" stroke-width="1.5"/> <path d="M21 4.5L21 19.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3 4.5L3 19.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
