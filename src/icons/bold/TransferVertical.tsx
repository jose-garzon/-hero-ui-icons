import React from 'react';

interface TransferVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TransferVertical = ({
  size = 24,
  color,
  className,
  ...props
}: TransferVerticalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4.00003 13.75C3.69074 13.75 3.41317 13.9399 3.30105 14.2281C3.18892 14.5164 3.26524 14.8439 3.49324 15.0529L9.49324 20.5529C9.71249 20.7539 10.0298 20.8063 10.302 20.6865C10.5743 20.5668 10.75 20.2974 10.75 20L10.75 4.00002C10.75 3.5858 10.4142 3.25002 10 3.25002C9.58582 3.25002 9.25003 3.5858 9.25003 4.00002V13.75H4.00003Z"/> <path d="M20 10.25L14.75 10.25V20C14.75 20.4142 14.4142 20.75 14 20.75C13.5858 20.75 13.25 20.4142 13.25 20L13.25 4.00002C13.25 3.70259 13.4258 3.43327 13.698 3.3135C13.9703 3.19374 14.2876 3.24617 14.5068 3.44715L20.5068 8.94715C20.7348 9.15614 20.8111 9.48366 20.699 9.77191C20.5869 10.0602 20.3093 10.25 20 10.25Z"/>
    </svg>
  );
};
