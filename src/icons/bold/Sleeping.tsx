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
      <path d="M2.75 6C2.75 5.58579 2.41421 5.25 2 5.25C1.58579 5.25 1.25 5.58579 1.25 6V18C1.25 18.4142 1.58579 18.75 2 18.75C2.41421 18.75 2.75 18.4142 2.75 18V16.75H21.142V18.0002C21.142 18.4144 21.4778 18.7502 21.892 18.7502C22.3063 18.7502 22.642 18.4144 22.642 18.0002V16.0001L22.6429 15.643C22.6429 13.648 22.6429 12.6506 22.3623 11.8487C21.8597 10.4125 20.7305 9.28325 19.2943 8.78069C18.4924 8.50011 17.4949 8.50011 15.5 8.50011H15.4977C14.7 8.50011 13.6599 8.50011 13.3394 8.61223C12.7649 8.81326 12.3133 9.26495 12.1122 9.83944C12 10.1602 12 10.5592 12 11.3571V15.25H2.75V6Z"/> <path d="M7 13.5C8.38071 13.5 9.5 12.3807 9.5 11C9.5 9.61929 8.38071 8.5 7 8.5C5.61929 8.5 4.5 9.61929 4.5 11C4.5 12.3807 5.61929 13.5 7 13.5Z"/>
    </svg>
  );
};
