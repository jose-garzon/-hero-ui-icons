import React from 'react';

interface Bedsidetable3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Bedsidetable3 = ({
  size = 24,
  color,
  className,
  ...props
}: Bedsidetable3Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V10.25H2V10ZM8.25 6.5C8.25 6.08579 8.58579 5.75 9 5.75H15C15.4142 5.75 15.75 6.08579 15.75 6.5C15.75 6.91421 15.4142 7.25 15 7.25H9C8.58579 7.25 8.25 6.91421 8.25 6.5Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.75H22V12C22 15.7712 22 17.6569 20.8284 18.8284C20.524 19.1328 20.1714 19.3582 19.75 19.5249V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5858 22.75 18.25 22.4142 18.25 22V19.8713C17.1801 20 15.8064 20 14 20H10C8.19364 20 6.81989 20 5.75 19.8713V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V19.5249C3.82861 19.3582 3.47599 19.1328 3.17157 18.8284C2 17.6569 2 15.7712 2 12V11.75ZM8.25 15.5C8.25 15.0858 8.58579 14.75 9 14.75H15C15.4142 14.75 15.75 15.0858 15.75 15.5C15.75 15.9142 15.4142 16.25 15 16.25H9C8.58579 16.25 8.25 15.9142 8.25 15.5Z"/>
    </svg>
  );
};
