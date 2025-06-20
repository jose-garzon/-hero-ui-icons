import React from 'react';

interface SliderminimalistichorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Sliderminimalistichorizontal = ({
  size = 24,
  color,
  className,
  ...props
}: SliderminimalistichorizontalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16 5.84615C18.8284 5.84615 20.2426 5.84615 21.1213 6.74736C22 7.64857 22 9.09905 22 12C22 14.901 22 16.3514 21.1213 17.2526C20.2426 18.1538 18.8284 18.1538 16 18.1538L8 18.1538C5.17157 18.1538 3.75736 18.1538 2.87868 17.2526C2 16.3514 2 14.901 2 12C2 9.09905 2 7.64857 2.87868 6.74736C3.75736 5.84615 5.17157 5.84615 8 5.84615L16 5.84615Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 2.76923C20.25 3.19407 19.9142 3.53846 19.5 3.53846L4.5 3.53846C4.08579 3.53846 3.75 3.19406 3.75 2.76923C3.75 2.3444 4.08579 2 4.5 2L19.5 2C19.9142 2 20.25 2.3444 20.25 2.76923ZM20.25 21.2308C20.25 21.6556 19.9142 22 19.5 22L4.5 22C4.08579 22 3.75 21.6556 3.75 21.2308C3.75 20.8059 4.08579 20.4615 4.5 20.4615L19.5 20.4615C19.9142 20.4615 20.25 20.8059 20.25 21.2308Z"/>
    </svg>
  );
};
