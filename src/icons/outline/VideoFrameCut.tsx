import React from 'react';

interface VideoFrameCutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const VideoFrameCut = ({
  size = 24,
  color,
  className,
  ...props
}: VideoFrameCutProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14.5 3.00293C17.2939 3.02331 18.8237 3.16641 19.8284 4.17112C21 5.34269 21 7.22831 21 10.9995V12.9995C21 16.7708 21 18.6564 19.8284 19.828C18.8237 20.8327 17.2939 20.9758 14.5 20.9962M9.49991 20.9962C6.70609 20.9758 5.17627 20.8327 4.17157 19.828C3 18.6564 3 16.7708 3 12.9995V10.9995C3 7.22831 3 5.34269 4.17157 4.17112C5.17627 3.16642 6.70609 3.02331 9.49991 3.00293" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17 4V20" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 2V22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/> <path d="M7 4V20" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3.5 8.5H7M20.5 8.5H17" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3.5 15.5H7M20.5 15.5H17" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
