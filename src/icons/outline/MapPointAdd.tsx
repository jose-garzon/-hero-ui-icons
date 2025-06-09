import React from 'react';

interface MapPointAddProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MapPointAdd = ({
  size = 24,
  color,
  className,
  ...props
}: MapPointAddProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z" stroke="black" stroke-width="1.5"/> <path d="M9.5 10H14.5M12 12.5L12 7.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
