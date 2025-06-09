import React from 'react';

interface SkateboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Skateboard = ({
  size = 24,
  color,
  className,
  ...props
}: SkateboardProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 7L2.81253 8.2188C3.5544 9.3316 4.80332 10 6.14073 10H17.8593C19.1967 10 20.4456 9.33159 21.1875 8.2188L22 7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="7" cy="15" r="2" stroke="black" stroke-width="1.5"/> <circle cx="17" cy="15" r="2" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
