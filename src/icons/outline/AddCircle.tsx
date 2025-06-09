import React from 'react';

interface AddCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AddCircle = ({
  size = 24,
  color,
  className,
  ...props
}: AddCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
