import React from 'react';

interface TuningProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Tuning = ({
  size = 24,
  color,
  className,
  ...props
}: TuningProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14 14.5C14 12.8431 15.3431 11.5 17 11.5C18.6568 11.5 20 12.8431 20 14.5C20 16.1569 18.6568 17.5 17 17.5C15.3431 17.5 14 16.1569 14 14.5Z" stroke="black" stroke-width="1.5"/> <path d="M3.99998 9.5C3.99998 11.1569 5.34312 12.5 6.99998 12.5C8.65683 12.5 9.99998 11.1569 9.99998 9.5C9.99998 7.84315 8.65683 6.5 6.99998 6.5C5.34312 6.5 3.99998 7.84315 3.99998 9.5Z" stroke="black" stroke-width="1.5"/> <path d="M16.9585 9L16.9585 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6.9585 15L6.9585 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16.9585 22L16.9585 20" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6.9585 2L6.9585 4" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
