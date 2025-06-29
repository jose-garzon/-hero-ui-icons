import React from 'react';

interface MappointwaveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Mappointwave = ({
  size = 24,
  color,
  className,
  ...props
}: MappointwaveProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 22.0003C17.5228 22.0003 22 19.9856 22 17.5003C22 16.2337 20.837 15.0892 18.9654 14.2715C17.8233 16.3673 16.0817 18.1738 13.8695 19.1192C12.6804 19.6274 11.3196 19.6274 10.1305 19.1192C7.91828 18.1738 6.17666 16.3673 5.03458 14.2715C3.16295 15.0892 2 16.2337 2 17.5003C2 19.9856 6.47715 22.0003 12 22.0003Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.51464C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51464C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C7.23416 16.2499 5 12.0844 5 8.51464ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"/>
    </svg>
  );
};
