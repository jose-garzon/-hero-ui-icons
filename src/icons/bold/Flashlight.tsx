import React from 'react';

interface FlashlightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Flashlight = ({
  size = 24,
  color,
  className,
  ...props
}: FlashlightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 4.25H4.00002L4 4C4 3.05719 4 2.58579 4.29289 2.29289C4.58579 2 5.05719 2 6 2H18C18.9428 2 19.4142 2 19.7071 2.29289C20 2.58579 20 3.05719 20 4L20 4.25Z"/> <path d="M16.1716 8.82843C16.0094 8.99057 15.87 9.12998 15.75 9.25475V9.25H8.25V9.25475C8.12999 9.12999 7.99061 8.99061 7.8285 8.8285L4.75 5.75H19.25L16.1716 8.82843Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9 11.6569V19C9 19.9319 9 20.3978 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C15 20.3978 15 19.9319 15 19V11.6569C15 11.2795 15 10.9893 15.015 10.75H8.98503C9 10.9893 9 11.2795 9 11.6569ZM12.75 13C12.75 12.5858 12.4142 12.25 12 12.25C11.5858 12.25 11.25 12.5858 11.25 13V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V13Z"/>
    </svg>
  );
};
