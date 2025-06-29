import React from 'react';

interface NotificationLinesRemoveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const NotificationLinesRemove = ({
  size = 24,
  color,
  className,
  ...props
}: NotificationLinesRemoveProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 14H16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 17.5H13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 2L17 6.99998M17 1.99998L22 6.99996" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
