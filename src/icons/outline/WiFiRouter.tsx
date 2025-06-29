import React from 'react';

interface WiFiRouterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const WiFiRouter = ({
  size = 24,
  color,
  className,
  ...props
}: WiFiRouterProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14C6.55228 14 7 14.4477 7 15Z"/> <path d="M10 15C10 15.5523 9.55228 16 9 16C8.44772 16 8 15.5523 8 15C8 14.4477 8.44772 14 9 14C9.55228 14 10 14.4477 10 15Z"/> <path d="M2 15C2 13.1144 2 12.1716 2.58579 11.5858C3.17157 11 4.11438 11 6 11H18C19.8856 11 20.8284 11 21.4142 11.5858C22 12.1716 22 13.1144 22 15C22 16.8856 22 17.8284 21.4142 18.4142C20.8284 19 19.8856 19 18 19H6C4.11438 19 3.17157 19 2.58579 18.4142C2 17.8284 2 16.8856 2 15Z" stroke="black" stroke-width="1.5"/> <path d="M7 11L3 4" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 11L21 4" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 15L18 15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17.1673 5.39702C16.3414 3.40286 14.3763 2 12.0836 2C9.79092 2 7.82586 3.40286 7 5.39702" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14.9646 6.65811C14.6007 5.41107 13.4489 4.5 12.0844 4.5C10.7198 4.5 9.568 5.41107 9.2041 6.65811" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M13.084 7C13.084 7.55228 12.6363 8 12.084 8C11.5317 8 11.084 7.55228 11.084 7C11.084 6.44772 11.5317 6 12.084 6C12.6363 6 13.084 6.44772 13.084 7Z"/>
    </svg>
  );
};
