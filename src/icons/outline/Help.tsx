import React from 'react';

interface HelpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Help = ({
  size = 24,
  color,
  className,
  ...props
}: HelpProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <circle cx="12" cy="12" r="4" stroke="black" stroke-width="1.5"/> <path d="M15 9L19 5" stroke="black" stroke-width="1.5"/> <path d="M5 19L9 15" stroke="black" stroke-width="1.5"/> <path d="M9 9L5 5" stroke="black" stroke-width="1.5"/> <path d="M19 19L15 15" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
