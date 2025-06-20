import React from 'react';

interface TestTubeMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TestTubeMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: TestTubeMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6.8008 11.7834L8.07502 11.9256C9.09772 12.0398 9.90506 12.8507 10.0187 13.8779C10.1062 14.6689 10.6104 15.3515 11.3387 15.665L13 16.3547M13 16.3547L20.2387 9.08398L14.8635 3.68504L4.11323 14.4829C2.62892 15.9738 2.62892 18.391 4.11323 19.8818C5.59754 21.3727 8.00407 21.3727 9.48838 19.8818L13 16.3547ZM21 9.84867L14.1815 3" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
