import React from 'react';

interface SunProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Sun = ({
  size = 24,
  color,
  className,
  ...props
}: SunProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="6" stroke="black" stroke-width="1.5"/> <path d="M12 2V3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 21V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 12L21 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3 12L2 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19.0708 4.92969L18.678 5.32252" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5.32178 18.6777L4.92894 19.0706" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19.0708 19.0703L18.678 18.6775" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5.32178 5.32227L4.92894 4.92943" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
