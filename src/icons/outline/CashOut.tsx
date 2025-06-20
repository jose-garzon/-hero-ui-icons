import React from 'react';

interface CashOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CashOut = ({
  size = 24,
  color,
  className,
  ...props
}: CashOutProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M18.6667 11C20.5513 10.7213 22 9.04574 22 7.02036C22 4.79998 20.2589 3 18.1111 3H5.88889C3.74112 3 2 4.79998 2 7.02036C2 9.04574 3.44873 10.7213 5.33333 11" stroke="black" stroke-width="1.5"/> <path d="M12 6V13M12 13L14 10.6667M12 13L10 10.6667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M5 10C5 8.11438 5 7.17157 5.58579 6.58579C6.17157 6 7.11438 6 9 6H15C16.8856 6 17.8284 6 18.4142 6.58579C19 7.17157 19 8.11438 19 10V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V10Z" stroke="black" stroke-width="1.5"/> <path d="M5 17H19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
