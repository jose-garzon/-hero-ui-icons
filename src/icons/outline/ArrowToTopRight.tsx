import React from 'react';

interface ArrowToTopRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ArrowToTopRight = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowToTopRightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 4.5L7 9.5M12 4.5L17 9.5M12 4.5C12 4.5 12 12.8333 12 14.5C12 16.1667 13 19.5 17 19.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
