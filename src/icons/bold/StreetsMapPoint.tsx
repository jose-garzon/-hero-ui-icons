import React from 'react';

interface StreetsMapPointProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const StreetsMapPoint = ({
  size = 24,
  color,
  className,
  ...props
}: StreetsMapPointProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21.8891 7.17165C22 8.43316 22 10.0056 22 12C22 16.1337 22 18.4549 21.0126 19.9513L15.0611 13.9998L21.8891 7.17165Z"/> <path d="M19.952 21.0121L14.0004 15.0605L7.17167 21.8891C8.43317 22 10.0056 22 12 22C16.1343 22 18.4557 22 19.952 21.0121Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C16.714 2 19.0711 2 20.5355 3.46447C21.0394 3.96833 21.3699 4.57786 21.5867 5.3527L5.3527 21.5867C4.57786 21.3699 3.96833 21.0394 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2ZM5.5 8.75732C5.5 10.5422 6.61708 12.625 8.35997 13.3698C8.76626 13.5434 9.23374 13.5434 9.64003 13.3698C11.3829 12.625 12.5 10.5422 12.5 8.75732C12.5 6.95835 10.933 5.5 9 5.5C7.067 5.5 5.5 6.95835 5.5 8.75732Z"/> <path d="M10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9Z"/>
    </svg>
  );
};
