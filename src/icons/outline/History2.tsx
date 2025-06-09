import React from 'react';

interface History2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const History2 = ({
  size = 24,
  color,
  className,
  ...props
}: History2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 9V13H16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.5 3.5"/>
    </svg>
  );
};
