import React from 'react';

interface WallpaperProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Wallpaper = ({
  size = 24,
  color,
  className,
  ...props
}: WallpaperProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" stroke="black" stroke-width="1.5"/> <path d="M19 19.5C19.4645 19.5 19.6968 19.5 19.8911 19.4692C20.9608 19.2998 21.7998 18.4608 21.9692 17.3911C22 17.1968 22 16.9645 22 16.5V7.5C22 7.0355 22 6.80325 21.9692 6.60891C21.7998 5.53918 20.9608 4.70021 19.8911 4.53078C19.6968 4.5 19.4645 4.5 19 4.5" stroke="black" stroke-width="1.5"/> <path d="M5 19.5C4.5355 19.5 4.30325 19.5 4.10891 19.4692C3.03918 19.2998 2.20021 18.4608 2.03078 17.3911C2 17.1968 2 16.9645 2 16.5V7.5C2 7.0355 2 6.80325 2.03078 6.60891C2.20021 5.53918 3.03918 4.70021 4.10891 4.53078C4.30325 4.5 4.5355 4.5 5 4.5" stroke="black" stroke-width="1.5"/> <circle cx="14.5" cy="6.5" r="1.5" stroke="black" stroke-width="1.5"/> <path d="M5 14.8159L6.29064 13.4917C6.9621 12.8028 7.9741 12.8423 8.60499 13.5821L11.7658 17.2884C12.2722 17.8822 13.0693 17.9632 13.6552 17.4804L13.875 17.2993C14.7181 16.6045 15.8588 16.685 16.6248 17.4933L18.5262 19.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
