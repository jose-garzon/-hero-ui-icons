import React from 'react';

interface CloudsunProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Cloudsun = ({
  size = 24,
  color,
  className,
  ...props
}: CloudsunProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"/> <path d="M9.9395 2.9549C9.11445 2.35431 8.0986 2 7 2C4.23858 2 2 4.23858 2 7C2 8.45451 2.62107 9.76396 3.61248 10.6776C4.12743 10.4112 4.68736 10.2195 5.27727 10.1165C5.26708 9.9612 5.2619 9.80468 5.2619 9.64706C5.2619 6.57385 7.21349 3.96993 9.9395 2.9549Z"/>
    </svg>
  );
};
