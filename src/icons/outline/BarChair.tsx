import React from 'react';

interface BarChairProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BarChair = ({
  size = 24,
  color,
  className,
  ...props
}: BarChairProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5.0315 6.93751C4.75731 4.72857 6.30192 2.69766 8.54207 2.32168L8.93963 2.25496C10.9651 1.91501 13.0349 1.91501 15.0604 2.25496L15.4579 2.32168C17.6981 2.69766 19.2427 4.72857 18.9685 6.93751L18.9505 7.08273C18.8855 7.6063 18.4315 8 17.8928 8H6.10719C5.56847 8 5.11452 7.6063 5.04953 7.08273L5.0315 6.93751Z" stroke="black" stroke-width="1.5"/> <path d="M9 8L6 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 8L18 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 17H7" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
