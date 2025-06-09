import React from 'react';

interface PowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Power = ({
  size = 24,
  color,
  className,
  ...props
}: PowerProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2V6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8.5 3.70605C5.26806 5.07157 3 8.27099 3 12.0001C3 16.9707 7.02944 21.0001 12 21.0001C16.9706 21.0001 21 16.9707 21 12.0001C21 8.27099 18.7319 5.07157 15.5 3.70605" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
