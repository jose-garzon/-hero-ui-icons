import React from 'react';

interface SlashSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SlashSquare = ({
  size = 24,
  color,
  className,
  ...props
}: SlashSquareProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM14.0184 7.3645C14.1257 6.9644 13.8882 6.55315 13.4881 6.44595C13.088 6.33874 12.6768 6.57618 12.5696 6.97628L9.98137 16.6355C9.87416 17.0356 10.1116 17.4469 10.5117 17.5541C10.9118 17.6613 11.323 17.4239 11.4303 17.0238L14.0184 7.3645Z"/>
    </svg>
  );
};
