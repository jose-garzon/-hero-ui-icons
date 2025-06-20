import React from 'react';

interface WiFiRouterMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const WiFiRouterMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: WiFiRouterMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21.5833 7.39702C20.7574 5.40286 18.7924 4 16.4996 4C14.2069 4 12.2419 5.40286 11.416 7.39702" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19.3806 8.65811C19.0167 7.41107 17.865 6.5 16.5004 6.5C15.1358 6.5 13.984 7.41107 13.6201 8.65811" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16C5 15.4477 5.44772 15 6 15C6.55228 15 7 15.4477 7 16Z"/> <path d="M10 16C10 16.5523 9.55228 17 9 17C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15C9.55228 15 10 15.4477 10 16Z"/> <path d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12H18C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20H6C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z" stroke="black" stroke-width="1.5"/> <path d="M16.5 12L16.5 9" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
