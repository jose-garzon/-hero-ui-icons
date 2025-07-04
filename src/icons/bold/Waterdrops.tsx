import React from 'react';

interface WaterdropsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Waterdrops = ({
  size = 24,
  color,
  className,
  ...props
}: WaterdropsProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10 17.8332C10 20.1344 8.20914 21.9999 6 21.9999C3.79086 21.9999 2 20.1344 2 17.8332C2 16.3934 3.56593 14.4717 4.73823 13.2347C5.43222 12.5025 6.56778 12.5025 7.26177 13.2347C8.43407 14.4717 10 16.3934 10 17.8332Z"/> <path d="M22 17.8332C22 20.1344 20.2091 21.9999 18 21.9999C15.7909 21.9999 14 20.1344 14 17.8332C14 16.3934 15.5659 14.4717 16.7382 13.2347C17.4322 12.5025 18.5678 12.5025 19.2618 13.2347C20.4341 14.4717 22 16.3934 22 17.8332Z"/> <path d="M16 7.83319C16 10.1344 14.2091 11.9999 12 11.9999C9.79086 11.9999 8 10.1344 8 7.83319C8 6.39337 9.56593 4.47165 10.7382 3.23473C11.4322 2.50249 12.5678 2.50249 13.2618 3.23473C14.4341 4.47165 16 6.39337 16 7.83319Z"/>
    </svg>
  );
};
