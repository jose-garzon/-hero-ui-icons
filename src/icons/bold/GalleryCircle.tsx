import React from 'react';

interface GalleryCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const GalleryCircle = ({
  size = 24,
  color,
  className,
  ...props
}: GalleryCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M17 9C17 10.1046 16.1046 11 15 11C13.8954 11 13 10.1046 13 9C13 7.89543 13.8954 7 15 7C16.1046 7 17 7.89543 17 9Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.1822 15.3618L6.89249 11.0721C6.03628 10.2159 4.66286 10.1702 3.75159 10.9675L2.751 11.8623C2.82464 6.81714 6.93735 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 13.9546 20.6438 15.7676 19.609 17.2612L17.7765 15.599C16.7369 14.6634 15.1888 14.5702 14.0446 15.3744L13.7464 15.5839C12.9512 16.1428 11.8694 16.0491 11.1822 15.3618Z"/>
    </svg>
  );
};
