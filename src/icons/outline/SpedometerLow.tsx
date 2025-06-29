import React from 'react';

interface SpedometerLowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SpedometerLow = ({
  size = 24,
  color,
  className,
  ...props
}: SpedometerLowProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" stroke-width="1.5"/> <path d="M19 19L17.5 17.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 5L17.5 6.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 19L6.5 17.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 5L6.5 6.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 12H4" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19.9998 12L21.9998 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 4.00021L12 2.00021" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M13.7783 14.3635C14.9499 13.1919 14.9499 11.2924 13.7783 10.1209C12.6068 8.94929 10.7073 8.94929 9.5357 10.1209C9.09005 10.5665 8.77881 11.4916 8.56421 12.467C8.24329 13.9255 8.08283 14.6548 8.66363 15.2356C9.24444 15.8164 9.9737 15.6559 11.4322 15.335C12.4076 15.1204 13.3327 14.8092 13.7783 14.3635Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
