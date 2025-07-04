import React from 'react';

interface ExpressionlessCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ExpressionlessCircle = ({
  size = 24,
  color,
  className,
  ...props
}: ExpressionlessCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M9 16C10 16 10.8846 16 12 16C13.1154 16 14 16 15 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"/> <ellipse cx="9" cy="10.5" rx="1" ry="1.5"/>
    </svg>
  );
};
