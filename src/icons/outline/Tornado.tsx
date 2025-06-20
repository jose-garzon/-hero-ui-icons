import React from 'react';

interface TornadoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Tornado = ({
  size = 24,
  color,
  className,
  ...props
}: TornadoProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 3C7.02944 3 3 3.67157 3 4.5C3 5.32843 7.02944 6 12 6C16.9706 6 21 5.32843 21 4.5C21 3.97993 19.412 3.52168 17 3.25259" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 8C20 8 17.2089 9 11.7241 9C6.23938 9 4 8 4 8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 14C16 14 14.7424 14.5 12 14.5C9.25762 14.5 8 14 8 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 16.5C15.2525 16.7554 14.3516 17 13 17C11.6484 17 10.6575 16.8786 10 16.7554" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11.7188 19.4609C12.103 19.4853 12.5297 19.5 13.0002 19.5C13.5738 19.5 14.0662 19.456 14.5002 19.3857" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M18 11C18 11 17.4848 12 12 12M6 11C6 11 6.21904 11.4251 7.8918 11.721" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M13 22C13 22 13.3047 22 13.5 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
