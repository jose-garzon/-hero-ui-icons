import React from 'react';

interface PassportMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PassportMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: PassportMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 5C5 4.59334 4.75727 4.24338 4.40879 4.0871C4.55271 3.97374 4.72712 3.89615 4.91959 3.86865L15.7172 2.32614C16.922 2.15402 18 3.08894 18 4.30604V5.12602C17.6804 5.04375 17.3453 5 17 5H5Z"/> <path d="M9.75 14C9.75 12.7574 10.7574 11.75 12 11.75C13.2426 11.75 14.25 12.7574 14.25 14C14.25 15.2426 13.2426 16.25 12 16.25C10.7574 16.25 9.75 15.2426 9.75 14Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6.17071C19.1652 6.58254 20 7.69378 20 9V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5C4 5.18214 4.0487 5.35291 4.13378 5.5C4.30669 5.7989 4.62986 6 5 6H17C17.3506 6 17.6872 6.06015 18 6.17071ZM12 10.25C9.92893 10.25 8.25 11.9289 8.25 14C8.25 16.0711 9.92893 17.75 12 17.75C14.0711 17.75 15.75 16.0711 15.75 14C15.75 11.9289 14.0711 10.25 12 10.25Z"/>
    </svg>
  );
};
