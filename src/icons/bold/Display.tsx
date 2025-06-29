import React from 'react';

interface DisplayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Display = ({
  size = 24,
  color,
  className,
  ...props
}: DisplayProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 8.75994C2 6.04468 2 4.68705 2.87868 3.84352C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.84352C22 4.68705 22 6.04468 22 8.75994V9.71993C22 12.4352 22 13.7928 21.1213 14.6363C20.2426 15.4799 18.8284 15.4799 16 15.4799H12.75V17.8409L18.2372 19.5968C18.6301 19.7225 18.8425 20.1303 18.7115 20.5075C18.5805 20.8847 18.1558 21.0886 17.7628 20.9629L12 19.1188L6.23717 20.9629C5.84421 21.0886 5.41947 20.8847 5.28849 20.5075C5.1575 20.1303 5.36987 19.7225 5.76283 19.5968L11.25 17.8409V15.4799H8C5.17157 15.4799 3.75736 15.4799 2.87868 14.6363C2 13.7928 2 12.4352 2 9.71993V8.75994Z"/>
    </svg>
  );
};
