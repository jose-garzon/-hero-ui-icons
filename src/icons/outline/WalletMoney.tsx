import React from 'react';

interface WalletMoneyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const WalletMoney = ({
  size = 24,
  color,
  className,
  ...props
}: WalletMoneyProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6 10H10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.8333 11H18.2308C16.4465 11 15 12.3431 15 14C15 15.6569 16.4465 17 18.2308 17H20.8333C20.9167 17 20.9583 17 20.9935 16.9979C21.5328 16.965 21.9623 16.5662 21.9977 16.0654C22 16.0327 22 15.994 22 15.9167V12.0833C22 12.006 22 11.9673 21.9977 11.9346C21.9623 11.4338 21.5328 11.035 20.9935 11.0021C20.9583 11 20.9167 11 20.8333 11Z" stroke="black" stroke-width="1.5"/> <path d="M20.965 11C20.8873 9.1277 20.6366 7.97975 19.8284 7.17157C18.6569 6 16.7712 6 13 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.6366 20.0203 20.8873 18.8723 20.965 17" stroke="black" stroke-width="1.5"/> <path d="M6 6L9.73549 3.52313C10.7874 2.82562 12.2126 2.82562 13.2645 3.52313L17 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17.9912 14H18.0002" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
