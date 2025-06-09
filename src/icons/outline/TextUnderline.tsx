import React from 'react';

interface TextUnderlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TextUnderline = ({
  size = 24,
  color,
  className,
  ...props
}: TextUnderlineProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 21H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4 3V9C4 13.4183 7.58172 17 12 17C16.4183 17 20 13.4183 20 9V3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
