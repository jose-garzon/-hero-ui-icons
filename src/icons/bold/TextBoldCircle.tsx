import React from 'react';

interface TextBoldCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TextBoldCircle = ({
  size = 24,
  color,
  className,
  ...props
}: TextBoldCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8.75 11.25H12C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75H9.52174C9.09552 6.75 8.75 7.09552 8.75 7.52174V11.25Z"/> <path d="M8.75 12.75V16.8235C8.75 17.0591 8.94094 17.25 9.17647 17.25H13C14.2426 17.25 15.25 16.2426 15.25 15C15.25 13.7574 14.2426 12.75 13 12.75H8.75Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM7.25 7.52174C7.25 6.26709 8.26709 5.25 9.52174 5.25H12C14.0711 5.25 15.75 6.92893 15.75 9C15.75 10.029 15.3356 10.9612 14.6645 11.6387C15.9004 12.2519 16.75 13.5268 16.75 15C16.75 17.0711 15.0711 18.75 13 18.75H9.17647C8.11251 18.75 7.25 17.8875 7.25 16.8235V7.52174Z"/>
    </svg>
  );
};
