import React from 'react';

interface RestartCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RestartCircle = ({
  size = 24,
  color,
  className,
  ...props
}: RestartCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M15.9775 8.71452L15.5355 8.2621C13.5829 6.26318 10.4171 6.26318 8.46447 8.2621C6.51184 10.261 6.51184 13.5019 8.46447 15.5008C10.4171 17.4997 13.5829 17.4997 15.5355 15.5008C16.671 14.3384 17.1462 12.7559 16.9611 11.242M15.9775 8.71452H13.3258M15.9775 8.71452V6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
