import React from 'react';

interface PlusMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PlusMinus = ({
  size = 24,
  color,
  className,
  ...props
}: PlusMinusProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.866 22 5.54466 22 4.04833 21.0123L21.0123 4.04833C22 5.54466 22 7.866 22 12ZM18.75 17C18.75 17.4142 18.4142 17.75 18 17.75H13C12.5858 17.75 12.25 17.4142 12.25 17C12.25 16.5858 12.5858 16.25 13 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.134 2 18.4553 2.98767 19.9517L19.9517 2.98767C18.4553 2 16.134 2 12 2ZM8 4.74996C8.41421 4.74996 8.75 5.08575 8.75 5.49996L8.75 7.24998H10.5C10.9142 7.24998 11.25 7.58577 11.25 7.99998C11.25 8.41419 10.9142 8.74998 10.5 8.74998H8.75L8.75 10.5C8.75 10.9142 8.41421 11.25 8 11.25C7.58579 11.25 7.25 10.9142 7.25 10.5L7.25 8.74998H5.5C5.08579 8.74998 4.75 8.41419 4.75 7.99998C4.75 7.58577 5.08579 7.24998 5.5 7.24998H7.25V5.49996C7.25 5.08575 7.58579 4.74996 8 4.74996Z"/>
    </svg>
  );
};
