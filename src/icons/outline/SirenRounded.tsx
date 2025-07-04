import React from 'react';

interface SirenRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SirenRounded = ({
  size = 24,
  color,
  className,
  ...props
}: SirenRoundedProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 22V16C20 11.5817 16.4183 8 12 8C7.58172 8 4 11.5817 4 16V22" stroke="black" stroke-width="1.5"/> <path d="M14.2905 11.5C15.2932 11.9059 16.0939 12.7065 16.4998 13.7092" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 22H22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 2V5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M21 6L19.5 7.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3 6L4.5 7.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M13.5 17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5Z" stroke="black" stroke-width="1.5"/> <path d="M12 19V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
