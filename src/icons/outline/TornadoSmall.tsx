import React from 'react';

interface TornadoSmallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TornadoSmall = ({
  size = 24,
  color,
  className,
  ...props
}: TornadoSmallProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 5C7.02944 5 3 5.67157 3 6.5C3 7.32843 7.02944 8 12 8C16.9706 8 21 7.32843 21 6.5C21 5.97993 19.412 5.52168 17 5.25259" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 10C20 10 17.2089 11 11.7241 11C6.23938 11 4 10 4 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 16C16 16 14.7424 16.5 12 16.5C9.25762 16.5 8 16 8 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 18.5C15.2525 18.7554 14.3516 19 13 19C11.6484 19 10.6575 18.8786 10 18.7554" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M18 13C18 13 17.4848 14 12 14M6 13C6 13 6.21904 13.4251 7.8918 13.721" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
