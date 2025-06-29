import React from 'react';

interface SafeCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SafeCircle = ({
  size = 24,
  color,
  className,
  ...props
}: SafeCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="black" stroke-width="1.5"/> <path d="M7 8L7 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 12C12 10.8954 12.8954 10 14 10C15.1046 10 16 10.8954 16 12C16 13.1046 15.1046 14 14 14C12.8954 14 12 13.1046 12 12Z" stroke="black" stroke-width="1.5"/> <path d="M16 10L17 9" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11 15L12 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 10L11 9" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 15L16 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
