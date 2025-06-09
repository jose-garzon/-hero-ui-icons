import React from 'react';

interface MicrophoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Microphone = ({
  size = 24,
  color,
  className,
  ...props
}: MicrophoneProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z" stroke="black" stroke-width="1.5"/> <path d="M13 8L17 8" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M13 11L17 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 10V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 19V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
