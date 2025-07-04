import React from 'react';

interface EndCallRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const EndCallRounded = ({
  size = 24,
  color,
  className,
  ...props
}: EndCallRoundedProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5.6072 16.8973L6.9469 16.5173C8.15591 16.1744 9 14.9826 9 13.6185C9 13.6185 9 11.9639 12 11.9639C15 11.9639 15 13.6185 15 13.6185C15 14.9826 15.8441 16.1744 17.0531 16.5173L18.3928 16.8973C20.2184 17.4151 22 15.9102 22 13.8504C22 12.6127 21.7234 11.373 20.9171 10.5032C19.5598 9.03889 16.8068 7 12 7C7.19322 7 4.44023 9.03888 3.08289 10.5032C2.27659 11.373 2 12.6127 2 13.8504C2 15.9102 3.78158 17.4151 5.6072 16.8973Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
