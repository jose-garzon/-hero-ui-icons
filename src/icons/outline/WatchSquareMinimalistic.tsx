import React from 'react';

interface WatchSquareMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const WatchSquareMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: WatchSquareMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5C14.8089 5 16.2134 5 17.2223 5.67412C17.659 5.96596 18.034 6.34096 18.3259 6.77772C19 7.78661 19 9.19108 19 12C19 14.8089 19 16.2134 18.3259 17.2223C18.034 17.659 17.659 18.034 17.2223 18.3259C16.2134 19 14.8089 19 12 19C9.19108 19 7.78661 19 6.77772 18.3259C6.34096 18.034 5.96596 17.659 5.67412 17.2223C5 16.2134 5 14.8089 5 12Z" stroke="black" stroke-width="1.5"/> <path d="M12 9V12.0769L14 14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7 2H17" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 22H17" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
