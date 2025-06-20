import React from 'react';

interface WaterdropProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Waterdrop = ({
  size = 24,
  color,
  className,
  ...props
}: WaterdropProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6115 22C6.85549 22 3 18.0569 3 13.1928V12.9281C3 8.31651 5.72854 4.16347 9.90329 2.42077C11.2473 1.85974 12.7527 1.85974 14.0967 2.42077C18.2715 4.16347 21 8.31651 21 12.9281V13.1928C21 18.0569 17.1445 22 12.3885 22H11.6115ZM12.0664 5.96145C12.2402 6.33741 12.0764 6.78313 11.7004 6.95699C10.155 7.6717 8.90712 9.12534 8.32961 10.9499C8.20462 11.3449 7.78316 11.5637 7.38826 11.4387C6.99335 11.3137 6.77454 10.8922 6.89954 10.4973C7.59154 8.31097 9.10593 6.50418 11.0708 5.59552C11.4468 5.42166 11.8925 5.5855 12.0664 5.96145Z"/>
    </svg>
  );
};
