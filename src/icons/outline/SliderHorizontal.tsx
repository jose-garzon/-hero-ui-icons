import React from 'react';

interface SliderHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SliderHorizontal = ({
  size = 24,
  color,
  className,
  ...props
}: SliderHorizontalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8 18C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6L16 6C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.2426 18 18.8284 18 16 18H8Z" stroke="black" stroke-width="1.5"/> <path d="M19.5 6C19.5 4.59987 19.5 3.8998 19.2275 3.36502C18.9878 2.89462 18.6054 2.51217 18.135 2.27248C17.6002 2 16.9001 2 15.5 2L8.5 2C7.09987 2 6.3998 2 5.86502 2.27248C5.39462 2.51217 5.01217 2.89462 4.77248 3.36502C4.5 3.8998 4.5 4.59987 4.5 6" stroke="black" stroke-width="1.5"/> <path d="M19.5 18C19.5 19.4001 19.5 20.1002 19.2275 20.635C18.9878 21.1054 18.6054 21.4878 18.135 21.7275C17.6002 22 16.9001 22 15.5 22L8.5 22C7.09987 22 6.3998 22 5.86502 21.7275C5.39462 21.4878 5.01217 21.1054 4.77248 20.635C4.5 20.1002 4.5 19.4001 4.5 18" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
