import React from 'react';

interface AlarmProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Alarm = ({
  size = 24,
  color,
  className,
  ...props
}: AlarmProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="13" r="9" stroke="black" stroke-width="1.5"/> <path d="M12 9V13L14.5 15.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3.5 4.5L7.50002 2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.5 4.5L16.5 2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
