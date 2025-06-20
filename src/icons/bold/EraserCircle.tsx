import React from 'react';

interface EraserCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const EraserCircle = ({
  size = 24,
  color,
  className,
  ...props
}: EraserCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.6064 7.67004C12.7197 6.55668 13.2764 6 13.9682 6C14.6599 6 15.2166 6.55668 16.33 7.67004C17.4433 8.7834 18 9.34008 18 10.0318C18 10.7236 17.4433 11.2803 16.33 12.3936L13.7114 15.0122L8.98781 10.2886L11.6064 7.67004ZM7.92715 11.3493L12.6507 16.0729L12.3936 16.33C11.2803 17.4433 10.7236 18 10.0318 18C9.34008 18 8.7834 17.4433 7.67004 16.33C6.55668 15.2166 6 14.6599 6 13.9682C6 13.2764 6.55668 12.7197 7.67004 11.6064L7.92715 11.3493Z"/>
    </svg>
  );
};
