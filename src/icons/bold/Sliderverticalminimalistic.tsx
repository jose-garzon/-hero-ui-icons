import React from 'react';

interface SliderverticalminimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Sliderverticalminimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: SliderverticalminimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5.84615 8C5.84615 5.17157 5.84615 3.75736 6.74736 2.87868C7.64857 2 9.09905 2 12 2C14.901 2 16.3514 2 17.2526 2.87868C18.1538 3.75736 18.1538 5.17157 18.1538 8V16C18.1538 18.8284 18.1538 20.2426 17.2526 21.1213C16.3514 22 14.901 22 12 22C9.09905 22 7.64857 22 6.74736 21.1213C5.84615 20.2426 5.84615 18.8284 5.84615 16V8Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.76923 3.75C3.19407 3.75 3.53846 4.08579 3.53846 4.5V19.5C3.53846 19.9142 3.19407 20.25 2.76923 20.25C2.3444 20.25 2 19.9142 2 19.5V4.5C2 4.08579 2.3444 3.75 2.76923 3.75ZM21.2308 3.75C21.6556 3.75 22 4.08579 22 4.5V19.5C22 19.9142 21.6556 20.25 21.2308 20.25C20.8059 20.25 20.4615 19.9142 20.4615 19.5V4.5C20.4615 4.08579 20.8059 3.75 21.2308 3.75Z"/>
    </svg>
  );
};
