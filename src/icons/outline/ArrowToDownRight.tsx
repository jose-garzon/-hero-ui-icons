import React from 'react';

interface ArrowToDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ArrowToDownRight = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowToDownRightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 19.5L7 14.5M12 19.5L17 14.5M12 19.5C12 19.5 12 11.1667 12 9.5C12 7.83333 13 4.5 17 4.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
