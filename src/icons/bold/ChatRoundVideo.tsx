import React from 'react';

interface ChatRoundVideoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ChatRoundVideo = ({
  size = 24,
  color,
  className,
  ...props
}: ChatRoundVideoProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C10.4003 22 8.88837 21.6244 7.54753 20.9565C7.19121 20.7791 6.78393 20.72 6.39939 20.8229L4.17335 21.4185C3.20701 21.677 2.32295 20.793 2.58151 19.8267L3.17712 17.6006C3.28001 17.2161 3.22094 16.8088 3.04346 16.4525C2.37562 15.1116 2 13.5997 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 11.1555 15.0732 10.586 13.2196 9.44695C11.3406 8.29234 10.4011 7.71504 9.70056 8.13891C9 8.56279 9 9.70853 9 12C9 14.2915 9 15.4372 9.70056 15.8611C10.4011 16.285 11.3406 15.7077 13.2196 14.5531C15.0732 13.414 16 12.8445 16 12Z"/>
    </svg>
  );
};
