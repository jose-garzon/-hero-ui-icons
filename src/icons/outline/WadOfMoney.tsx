import React from 'react';

interface WadOfMoneyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const WadOfMoney = ({
  size = 24,
  color,
  className,
  ...props
}: WadOfMoneyProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 19C6.19108 19 4.78661 19 3.77772 18.3259C3.34096 18.034 2.96596 17.659 2.67412 17.2223C2 16.2134 2 14.8089 2 12C2 9.19108 2 7.78661 2.67412 6.77772C2.96596 6.34096 3.34096 5.96596 3.77772 5.67412C4.78661 5 6.19108 5 9 5L15 5C17.8089 5 19.2134 5 20.2223 5.67412C20.659 5.96596 21.034 6.34096 21.3259 6.77772C22 7.78661 22 9.19108 22 12C22 14.8089 22 16.2134 21.3259 17.2223C21.034 17.659 20.659 18.034 20.2223 18.3259C19.2134 19 17.8089 19 15 19H9Z" stroke="black" stroke-width="1.5"/> <path d="M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15" stroke="black" stroke-width="1.5"/> <path d="M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15" stroke="black" stroke-width="1.5"/> <path d="M9 5V18.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 5V18.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
