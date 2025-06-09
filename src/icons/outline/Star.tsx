import React from 'react';

interface StarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Star = ({
  size = 24,
  color,
  className,
  ...props
}: StarProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 20V17.6M12 6.4V4M20 12H17.6M6.4 12H4M17.6569 6.34315L15.9598 8.0402M8.0402 15.9598L6.34315 17.6569M6.34293 6.34332L8.03999 8.04038M15.9596 15.96L17.6566 17.657" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
