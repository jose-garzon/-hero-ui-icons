import React from 'react';

interface PlugcircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Plugcircle = ({
  size = 24,
  color,
  className,
  ...props
}: PlugcircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2C6.47715 2 2 6.48336 2 12.0139C2 17.2918 6.07759 21.6161 11.2503 22L11.2499 15.9387C9.67737 15.5949 8.5 14.1924 8.5 12.5146V12.0139C8.5 11.4608 8.94772 11.0125 9.5 11.0125H9.75V9.0097C9.75 8.59491 10.0858 8.25866 10.5 8.25866C10.9142 8.25866 11.25 8.59491 11.25 9.0097V11.0125H12.75V9.0097C12.75 8.59491 13.0858 8.25866 13.5 8.25866C13.9142 8.25866 14.25 8.59491 14.25 9.0097V11.0125H14.5C15.0523 11.0125 15.5 11.4608 15.5 12.0139V12.5146C15.5 14.1925 14.3226 15.595 12.7499 15.9388L12.7497 22C17.9224 21.6161 22 17.2918 22 12.0139C22 6.48336 17.5228 2 12 2Z"/>
    </svg>
  );
};
