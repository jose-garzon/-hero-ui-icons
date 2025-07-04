import React from 'react';

interface UploadTrackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UploadTrack = ({
  size = 24,
  color,
  className,
  ...props
}: UploadTrackProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 15C12 16.1046 11.1046 17 10 17C8.89543 17 8 16.1046 8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15Z" stroke="black" stroke-width="1.5"/> <path d="M12 15V9" stroke="black" stroke-width="1.5"/> <path d="M14.0584 11.0294L12.7416 10.371C12.5592 10.2798 12.468 10.2342 12.3926 10.1765C12.1974 10.0273 12.064 9.81145 12.0178 9.57014C12 9.47699 12 9.37499 12 9.171C12 8.68545 12 8.44268 12.0598 8.27764C12.2178 7.84144 12.6551 7.57119 13.1159 7.62495C13.2902 7.64528 13.5074 7.75385 13.9416 7.971L15.2584 8.62936C15.4408 8.72058 15.532 8.7662 15.6074 8.82381C15.8026 8.97304 15.936 9.1889 15.9822 9.43021C16 9.52337 16 9.62536 16 9.82936C16 10.3149 16 10.5577 15.9402 10.7227C15.7822 11.1589 15.3449 11.4292 14.8841 11.3754C14.7098 11.3551 14.4926 11.2465 14.0584 11.0294Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 21.8C13.3538 21.9311 12.6849 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
