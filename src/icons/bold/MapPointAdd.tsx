import React from 'react';

interface MapPointAddProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MapPointAdd = ({
  size = 24,
  color,
  className,
  ...props
}: MapPointAddProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C7.58172 2 4 5.64588 4 10.1433C4 14.6055 6.55332 19.8124 10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.6055 20 10.1433C20 5.64588 16.4183 2 12 2ZM12 6.75C12.4142 6.75 12.75 7.08579 12.75 7.5V9.25H14.5C14.9142 9.25 15.25 9.58579 15.25 10C15.25 10.4142 14.9142 10.75 14.5 10.75H12.75V12.5C12.75 12.9142 12.4142 13.25 12 13.25C11.5858 13.25 11.25 12.9142 11.25 12.5V10.75H9.5C9.08579 10.75 8.75 10.4142 8.75 10C8.75 9.58579 9.08579 9.25 9.5 9.25H11.25V7.5C11.25 7.08579 11.5858 6.75 12 6.75Z"/>
    </svg>
  );
};
