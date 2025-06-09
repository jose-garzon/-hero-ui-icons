import React from 'react';

interface WineglassTriangleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const WineglassTriangle = ({
  size = 24,
  color,
  className,
  ...props
}: WineglassTriangleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 14.5714L20.5162 5.86382C21.5624 4.79408 20.7999 3 19.2991 3H4.70095C3.20008 3 2.43759 4.79409 3.48381 5.86382L12 14.5714ZM12 14.5714V21M12 21H16.2439M12 21H7.7561M7.47318 9.75H16.5268" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
