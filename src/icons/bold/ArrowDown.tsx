import React from 'react';

interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ArrowDown = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L11.25 13.25H6.00002C5.69668 13.25 5.4232 13.4327 5.30711 13.713C5.19103 13.9932 5.25519 14.3158 5.46969 14.5303L11.4697 20.5303C11.6103 20.671 11.8011 20.75 12 20.75C12.1989 20.75 12.3897 20.671 12.5304 20.5303L18.5304 14.5303C18.7449 14.3158 18.809 13.9932 18.6929 13.713C18.5768 13.4327 18.3034 13.25 18 13.25H12.75L12.75 4Z"/>
    </svg>
  );
};
