import React from 'react';

interface Closet2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Closet2 = ({
  size = 24,
  color,
  className,
  ...props
}: Closet2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V12C2 15.7712 2 17.6569 3.17157 18.8284C3.47599 19.1328 3.82861 19.3582 4.25 19.5249V22C4.25 22.4142 4.58579 22.75 5 22.75C5.41421 22.75 5.75 22.4142 5.75 22V19.8713C6.81989 20 8.19364 20 10 20H11.25V2ZM9 8.25C9.41421 8.25 9.75 8.58579 9.75 9V13C9.75 13.4142 9.41421 13.75 9 13.75C8.58579 13.75 8.25 13.4142 8.25 13V9C8.25 8.58579 8.58579 8.25 9 8.25Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 20H14C15.8064 20 17.1801 20 18.25 19.8713V22C18.25 22.4142 18.5858 22.75 19 22.75C19.4142 22.75 19.75 22.4142 19.75 22V19.5249C20.1714 19.3582 20.524 19.1328 20.8284 18.8284C22 17.6569 22 15.7712 22 12V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12.75V20ZM15 8.25C15.4142 8.25 15.75 8.58579 15.75 9V13C15.75 13.4142 15.4142 13.75 15 13.75C14.5858 13.75 14.25 13.4142 14.25 13V9C14.25 8.58579 14.5858 8.25 15 8.25Z"/>
    </svg>
  );
};
