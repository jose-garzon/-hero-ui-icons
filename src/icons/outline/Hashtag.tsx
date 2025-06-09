import React from 'react';

interface HashtagProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Hashtag = ({
  size = 24,
  color,
  className,
  ...props
}: HashtagProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10 3L5 21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19 3L14 21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M22 9H4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20 16H2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
