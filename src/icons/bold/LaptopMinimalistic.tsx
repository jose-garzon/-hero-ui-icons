import React from 'react';

interface LaptopMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const LaptopMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: LaptopMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 20.24C1 19.8203 1.3436 19.48 1.76744 19.48H22.2326C22.6564 19.48 23 19.8203 23 20.24C23 20.6597 22.6564 21 22.2326 21H1.76744C1.3436 21 1 20.6597 1 20.24Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.68981 3.8904C2.7907 4.78079 2.7907 6.21386 2.7907 9.08V14.1467C2.7907 16.0574 2.7907 17.0128 3.39011 17.6064C3.98952 18.2 4.95425 18.2 6.88372 18.2H17.1163C19.0457 18.2 20.0105 18.2 20.6099 17.6064C21.2093 17.0128 21.2093 16.0574 21.2093 14.1467V9.08C21.2093 6.21386 21.2093 4.78079 20.3102 3.8904C19.4111 3 17.964 3 15.0698 3H8.93023C6.03603 3 4.58893 3 3.68981 3.8904ZM8.16279 15.16C8.16279 14.7403 8.50639 14.4 8.93023 14.4H15.0698C15.4936 14.4 15.8372 14.7403 15.8372 15.16C15.8372 15.5797 15.4936 15.92 15.0698 15.92H8.93023C8.50639 15.92 8.16279 15.5797 8.16279 15.16Z"/>
    </svg>
  );
};
