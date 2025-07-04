import React from 'react';

interface Laptop3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Laptop3 = ({
  size = 24,
  color,
  className,
  ...props
}: Laptop3Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14.5 2H9.5C6.67157 2 5.25736 2 4.37868 2.87868C3.5 3.75736 3.5 5.17157 3.5 8V11.5C3.5 13.3856 3.5 14.3284 4.08579 14.9142C4.67157 15.5 5.61438 15.5 7.5 15.5H16.5C18.3856 15.5 19.3284 15.5 19.9142 14.9142C20.5 14.3284 20.5 13.3856 20.5 11.5V8C20.5 5.17157 20.5 3.75736 19.6213 2.87868C18.7426 2 17.3284 2 14.5 2Z"/> <path d="M5 22H19C20.6569 22 22 20.6569 22 19V18C22 17.4477 21.5523 17 21 17H16.6667C16.2339 17 15.8129 17.1404 15.4667 17.4L14.5333 18.1C14.1871 18.3596 13.7661 18.5 13.3333 18.5H10.6667C10.2339 18.5 9.81286 18.3596 9.46667 18.1L8.53333 17.4C8.18714 17.1404 7.76607 17 7.33333 17H3C2.44772 17 2 17.4477 2 18V19C2 20.6569 3.34315 22 5 22Z"/>
    </svg>
  );
};
