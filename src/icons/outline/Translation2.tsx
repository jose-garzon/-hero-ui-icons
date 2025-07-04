import React from 'react';

interface Translation2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Translation2 = ({
  size = 24,
  color,
  className,
  ...props
}: Translation2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.2426 16.2426C17.3284 15.1569 18 13.6569 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 13.6569 6.67157 15.1569 7.75736 16.2426" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="12" cy="12" r="2" stroke="black" stroke-width="1.5"/> <path d="M9.88736 17.3441C10.8467 16.4683 11.3264 16.0304 11.9187 16.002C11.9729 15.9993 12.0271 15.9993 12.0813 16.002C12.6736 16.0304 13.1533 16.4683 14.1126 17.3441C16.2001 19.2497 17.2439 20.2025 16.9517 21.0245C16.9266 21.0952 16.8954 21.1639 16.8584 21.2301C16.4282 22 14.9522 22 12 22C9.04784 22 7.57176 22 7.14161 21.2301C7.10463 21.1639 7.07344 21.0952 7.04832 21.0245C6.75612 20.2025 7.79987 19.2497 9.88736 17.3441Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
