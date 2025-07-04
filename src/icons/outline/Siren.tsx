import React from 'react';

interface SirenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Siren = ({
  size = 24,
  color,
  className,
  ...props
}: SirenProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 22V16C20 13.1997 20 11.7996 19.455 10.73C18.9757 9.78924 18.2108 9.02433 17.27 8.54497C16.2004 8 14.8003 8 12 8C9.19974 8 7.79961 8 6.73005 8.54497C5.78924 9.02433 5.02433 9.78924 4.54497 10.73C4 11.7996 4 13.1997 4 16V22" stroke="black" stroke-width="1.5"/> <path d="M15 10.8149C16.23 10.8149 17.23 11.77 17.1851 13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 22H22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 2V5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M21 5L19.5 6.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3 5L4.5 6.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M13.5 17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5Z" stroke="black" stroke-width="1.5"/> <path d="M12 19V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
