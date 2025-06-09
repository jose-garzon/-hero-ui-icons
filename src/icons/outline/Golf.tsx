import React from 'react';

interface GolfProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Golf = ({
  size = 24,
  color,
  className,
  ...props
}: GolfProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <ellipse cx="12" cy="18.5" rx="10" ry="3.5" stroke="black" stroke-width="1.5"/> <path d="M12 18V2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 3.5L17.4224 6.21114C18.9835 6.99169 19.764 7.38196 19.764 8C19.764 8.61804 18.9835 9.00831 17.4224 9.78886L12 12.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
