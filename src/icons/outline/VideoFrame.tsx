import React from 'react';

interface VideoFrameProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const VideoFrame = ({
  size = 24,
  color,
  className,
  ...props
}: VideoFrameProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" stroke-width="1.5"/> <path d="M17 2.5L17 21.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 2.5L7 21.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2.5 7L7 7M21.5 7L17 7" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2.5 17L7 17M21.5 17L17 17" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 12H22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
