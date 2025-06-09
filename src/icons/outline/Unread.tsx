import React from 'react';

interface UnreadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Unread = ({
  size = 24,
  color,
  className,
  ...props
}: UnreadProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 12.9L10.1429 16.5L18 7.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
