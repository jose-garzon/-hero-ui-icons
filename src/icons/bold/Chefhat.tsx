import React from 'react';

interface ChefhatProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Chefhat = ({
  size = 24,
  color,
  className,
  ...props
}: ChefhatProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 5C4.23858 5 2 7.23858 2 10C2 12.0503 3.2341 13.8124 5 14.584V17.25H19L19 14.584C20.7659 13.8124 22 12.0503 22 10C22 7.23858 19.7614 5 17 5C16.7495 5 16.5033 5.01842 16.2626 5.05399C15.6604 3.27806 13.9794 2 12 2C10.0206 2 8.33961 3.27806 7.73736 5.05399C7.49673 5.01842 7.25052 5 7 5Z"/> <path d="M18.9983 18.75H5.00169C5.01188 20.1469 5.08343 20.9119 5.58579 21.4142C6.17157 22 7.11438 22 9 22H15C16.8856 22 17.8284 22 18.4142 21.4142C18.9166 20.9119 18.9881 20.1469 18.9983 18.75Z"/>
    </svg>
  );
};
