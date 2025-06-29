import React from 'react';

interface UploadSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UploadSquare = ({
  size = 24,
  color,
  className,
  ...props
}: UploadSquareProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 17L12 10M12 10L15 13M12 10L9 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16 7H12H8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
