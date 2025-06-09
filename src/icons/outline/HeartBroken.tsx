import React from 'react';

interface HeartBrokenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const HeartBroken = ({
  size = 24,
  color,
  className,
  ...props
}: HeartBrokenProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5M12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5M12 5.50063L10.5 8.5L14 11L11 14.5L13 16.5L12 20.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
