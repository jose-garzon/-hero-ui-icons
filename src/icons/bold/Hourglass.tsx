import React from 'react';

interface HourglassProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Hourglass = ({
  size = 24,
  color,
  className,
  ...props
}: HourglassProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5.19825 3.29918C5.80046 2 7.86697 2 12 2C16.133 2 18.1995 2 18.8017 3.29918C18.8535 3.41086 18.8972 3.52686 18.9323 3.6461C19.3414 5.0333 17.8802 6.64111 14.9577 9.85674L13 12L14.9577 14.1433C17.8802 17.3589 19.3414 18.9667 18.9323 20.3539C18.8972 20.4731 18.8535 20.5891 18.8017 20.7008C18.1995 22 16.133 22 12 22C7.86697 22 5.80046 22 5.19825 20.7008C5.14649 20.5891 5.10282 20.4731 5.06765 20.3539C4.65857 18.9667 6.11981 17.3589 9.0423 14.1433L11 12L9.0423 9.85674C6.11981 6.64111 4.65857 5.0333 5.06765 3.6461C5.10282 3.52686 5.14649 3.41086 5.19825 3.29918Z"/>
    </svg>
  );
};
