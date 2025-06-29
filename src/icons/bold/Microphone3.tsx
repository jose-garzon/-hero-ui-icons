import React from 'react';

interface Microphone3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Microphone3 = ({
  size = 24,
  color,
  className,
  ...props
}: Microphone3Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4.41421 9 4.75 9.33579 4.75 9.75V10.75C4.75 14.7541 7.99594 18 12 18C16.0041 18 19.25 14.7541 19.25 10.75V9.75C19.25 9.33579 19.5858 9 20 9C20.4142 9 20.75 9.33579 20.75 9.75V10.75C20.75 15.3298 17.2314 19.0879 12.75 19.4683V21.75C12.75 22.1642 12.4142 22.5 12 22.5C11.5858 22.5 11.25 22.1642 11.25 21.75V19.4683C6.7686 19.0879 3.25 15.3298 3.25 10.75V9.75C3.25 9.33579 3.58579 9 4 9Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.82436 2 6.25 4.57436 6.25 7.75V10.75C6.25 13.9256 8.82436 16.5 12 16.5C15.1756 16.5 17.75 13.9256 17.75 10.75V7.75C17.75 4.57436 15.1756 2 12 2ZM14 11.5C14.4142 11.5 14.75 11.1642 14.75 10.75C14.75 10.3358 14.4142 10 14 10H10C9.58579 10 9.25 10.3358 9.25 10.75C9.25 11.1642 9.58579 11.5 10 11.5H14ZM13.75 7.75C13.75 8.16421 13.4142 8.5 13 8.5H11C10.5858 8.5 10.25 8.16421 10.25 7.75C10.25 7.33579 10.5858 7 11 7H13C13.4142 7 13.75 7.33579 13.75 7.75Z"/>
    </svg>
  );
};
