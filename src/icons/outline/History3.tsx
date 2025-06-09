import React from 'react';

interface History3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const History3 = ({
  size = 24,
  color,
  className,
  ...props
}: History3Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.5 3.5"/> <path d="M22 12C22 6.47715 17.5228 2 12 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 9V13H16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
