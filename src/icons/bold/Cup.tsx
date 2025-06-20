import React from 'react';

interface CupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Cup = ({
  size = 24,
  color,
  className,
  ...props
}: CupProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H13C14.8856 3 15.8284 3 16.4142 3.58579C16.5956 3.76717 16.7208 3.98277 16.8073 4.25H18C20.6234 4.25 22.75 6.37665 22.75 9C22.75 11.6234 20.6234 13.75 18 13.75H17V12.25H18C19.7949 12.25 21.25 10.7949 21.25 9C21.25 7.20507 19.7949 5.75 18 5.75H16.9908C17 6.11353 17 6.52712 17 7V12.25H3.00002L3 7Z"/> <path d="M3.01095 13.75H16.9891C16.9528 15.4553 16.7963 16.4463 16.1213 17.1213C15.2426 18 13.8284 18 11 18H9C6.17157 18 4.75736 18 3.87868 17.1213C3.2037 16.4463 3.04722 15.4553 3.01095 13.75Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 21C1.25 20.5858 1.58579 20.25 2 20.25L22 20.25C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75L2 21.75C1.58579 21.75 1.25 21.4142 1.25 21Z"/>
    </svg>
  );
};
