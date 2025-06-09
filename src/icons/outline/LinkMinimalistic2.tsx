import React from 'react';

interface LinkMinimalistic2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const LinkMinimalistic2 = ({
  size = 24,
  color,
  className,
  ...props
}: LinkMinimalistic2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14.1625 18.4876L13.4417 19.2084C11.053 21.5971 7.18019 21.5971 4.79151 19.2084C2.40283 16.8198 2.40283 12.9469 4.79151 10.5583L5.51236 9.8374" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9.8374 14.1625L14.1625 9.8374" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M9.8374 5.51236L10.5583 4.79151C12.9469 2.40283 16.8198 2.40283 19.2084 4.79151C21.5971 7.18019 21.5971 11.053 19.2084 13.4417L18.4876 14.1625" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
