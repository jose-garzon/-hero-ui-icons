import React from 'react';

interface PlaylistMinimalistic2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PlaylistMinimalistic2 = ({
  size = 24,
  color,
  className,
  ...props
}: PlaylistMinimalistic2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15 6L3 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M13 10L3 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9 14H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 18H3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 16.5V12.5V8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="14.5" cy="16.5" r="2.5" stroke="black" stroke-width="1.5"/> <path d="M21 12C18.7909 12 17 10.2091 17 8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
