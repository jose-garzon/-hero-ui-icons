import React from 'react';

interface VinylRecordProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const VinylRecord = ({
  size = 24,
  color,
  className,
  ...props
}: VinylRecordProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="3" stroke="black" stroke-width="1.5"/> <path d="M4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7.40381 16.5967C4.8654 14.0583 4.8654 9.94271 7.40381 7.4043M16.5962 7.4043C19.1346 9.94271 19.1346 14.0583 16.5962 16.5967" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
