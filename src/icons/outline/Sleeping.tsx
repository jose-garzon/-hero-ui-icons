import React from 'react';

interface SleepingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Sleeping = ({
  size = 24,
  color,
  className,
  ...props
}: SleepingProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 6V18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M22 18V15.6429C22 13.6479 22 12.6505 21.7194 11.8486C21.2169 10.4124 20.0876 9.28314 18.6514 8.78058C17.8495 8.5 16.8521 8.5 14.8571 8.5C14.0592 8.5 13.6602 8.5 13.3394 8.61223C12.7649 8.81326 12.3133 9.26495 12.1122 9.83944C12 10.1602 12 10.5592 12 11.3571V16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 16H22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9.5 11C9.5 12.3807 8.38071 13.5 7 13.5C5.61929 13.5 4.5 12.3807 4.5 11C4.5 9.61929 5.61929 8.5 7 8.5C8.38071 8.5 9.5 9.61929 9.5 11Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
