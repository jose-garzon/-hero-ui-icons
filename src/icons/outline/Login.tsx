import React from 'react';

interface LoginProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Login = ({
  size = 24,
  color,
  className,
  ...props
}: LoginProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4 12H14M14 12L11 9M14 12L11 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
