import React from 'react';

interface DoublealtarrowupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Doublealtarrowup = ({
  size = 24,
  color,
  className,
  ...props
}: DoublealtarrowupProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.43057 13.4881C4.70014 13.8026 5.17361 13.839 5.48811 13.5694L12 7.98781L18.5119 13.5694C18.8264 13.839 19.2999 13.8026 19.5695 13.4881C19.839 13.1736 19.8026 12.7001 19.4881 12.4306L12.4881 6.43056C12.2072 6.18981 11.7928 6.18981 11.5119 6.43056L4.51192 12.4306C4.19743 12.7001 4.161 13.1736 4.43057 13.4881Z"/> <path d="M5.00005 17.75C4.68619 17.75 4.40553 17.5546 4.29664 17.2602C4.18774 16.9658 4.27366 16.6348 4.51196 16.4306L11.512 10.4306C11.7928 10.1898 12.2073 10.1898 12.4881 10.4306L19.4881 16.4306C19.7264 16.6348 19.8124 16.9658 19.7035 17.2602C19.5946 17.5546 19.3139 17.75 19 17.75H5.00005Z"/>
    </svg>
  );
};
