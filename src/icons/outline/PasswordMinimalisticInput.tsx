import React from 'react';

interface PasswordMinimalisticInputProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PasswordMinimalisticInput = ({
  size = 24,
  color,
  className,
  ...props
}: PasswordMinimalisticInputProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H12M15 4.00093C18.1143 4.01004 19.7653 4.10848 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.7653 19.8915 18.1143 19.99 15 19.9991" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"/> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"/> <path d="M15 2V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
