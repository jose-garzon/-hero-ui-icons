import React from 'react';

interface ChecklistProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Checklist = ({
  size = 24,
  color,
  className,
  ...props
}: ChecklistProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 5.5L3.21429 7L7.5 3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 12.5L3.21429 14L7.5 10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 19.5L3.21429 21L7.5 17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M22 19L12 19" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 12L12 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 5L12 5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
