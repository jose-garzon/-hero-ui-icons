import React from 'react';

interface InboxArchiveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const InboxArchive = ({
  size = 24,
  color,
  className,
  ...props
}: InboxArchiveProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" stroke-width="1.5"/> <path d="M4 15H6.30147C7.10984 15 7.51402 15 7.87676 15.1477C7.90979 15.1612 7.94245 15.1755 7.97471 15.1907C8.32903 15.3576 8.60269 15.6551 9.15 16.25L9.18546 16.2885C9.69759 16.8452 9.95366 17.1235 10.2809 17.2877C10.3422 17.3184 10.405 17.346 10.4692 17.3703C10.8115 17.5 11.1897 17.5 11.9462 17.5C12.6613 17.5 13.0189 17.5 13.3458 17.3829C13.4071 17.361 13.4673 17.336 13.5262 17.3082C13.8402 17.1598 14.0931 16.9069 14.5987 16.4013L14.8284 16.1716C15.4065 15.5935 15.6955 15.3045 16.0631 15.1522C16.4306 15 16.8394 15 17.6569 15H20" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 15V13.5C5 12.6716 5.67157 12 6.5 12H17.5C18.3284 12 19 12.6716 19 13.5V15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 14V10.5C5 9.67157 5.67157 9 6.5 9H17.5C18.3284 9 19 9.67157 19 10.5V14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M5 11V7.5C5 6.67157 5.67157 6 6.5 6H17.5C18.3284 6 19 6.67157 19 7.5V11" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
