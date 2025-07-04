import React from 'react';

interface BedsideTable2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BedsideTable2 = ({
  size = 24,
  color,
  className,
  ...props
}: BedsideTable2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9743 7.25H2.02572C2.09185 5.22882 2.32803 4.01511 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C21.672 4.01511 21.9082 5.22882 21.9743 7.25Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 9.55807 2 9.14203 2.00189 8.75H21.9981C22 9.14203 22 9.55807 22 10V12C22 12.4419 22 12.858 21.9981 13.25H2.00189C2 12.858 2 12.4419 2 12V10Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9743 14.75H2.02572C2.09185 16.7712 2.32803 17.9849 3.17157 18.8284C3.47599 19.1328 3.82861 19.3582 4.25 19.5249V22C4.25 22.4142 4.58579 22.75 5 22.75C5.41421 22.75 5.75 22.4142 5.75 22V19.8713C6.81989 20 8.19364 20 10 20H14C15.8064 20 17.1801 20 18.25 19.8713V22C18.25 22.4142 18.5858 22.75 19 22.75C19.4142 22.75 19.75 22.4142 19.75 22V19.5249C20.1714 19.3582 20.524 19.1328 20.8284 18.8284C21.672 17.9849 21.9082 16.7712 21.9743 14.75ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"/>
    </svg>
  );
};
