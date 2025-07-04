import React from 'react';

interface RemoteController2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RemoteController2 = ({
  size = 24,
  color,
  className,
  ...props
}: RemoteController2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 9C5 6.19108 5 4.78661 5.67412 3.77772C5.96596 3.34096 6.34096 2.96596 6.77772 2.67412C7.78661 2 9.19108 2 12 2C14.8089 2 16.2134 2 17.2223 2.67412C17.659 2.96596 18.034 3.34096 18.3259 3.77772C19 4.78661 19 6.19108 19 9V15C19 17.8089 19 19.2134 18.3259 20.2223C18.034 20.659 17.659 21.034 17.2223 21.3259C16.2134 22 14.8089 22 12 22C9.19108 22 7.78661 22 6.77772 21.3259C6.34096 21.034 5.96596 20.659 5.67412 20.2223C5 19.2134 5 17.8089 5 15V9Z" stroke="black" stroke-width="1.5"/> <path d="M15 15.5C15 17.1569 13.6569 18.5 12 18.5C10.3431 18.5 9 17.1569 9 15.5C9 13.8431 10.3431 12.5 12 12.5C13.6569 12.5 15 13.8431 15 15.5Z" stroke="black" stroke-width="1.5"/> <path d="M11 9.5C11 10.0523 10.5523 10.5 10 10.5C9.44772 10.5 9 10.0523 9 9.5C9 8.94772 9.44772 8.5 10 8.5C10.5523 8.5 11 8.94772 11 9.5Z"/> <circle cx="10" cy="6" r="1"/> <path d="M15 9.5C15 10.0523 14.5523 10.5 14 10.5C13.4477 10.5 13 10.0523 13 9.5C13 8.94772 13.4477 8.5 14 8.5C14.5523 8.5 15 8.94772 15 9.5Z"/> <circle cx="14" cy="6" r="1"/>
    </svg>
  );
};
