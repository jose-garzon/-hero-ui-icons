import React from 'react';

interface Tennis2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Tennis2 = ({
  size = 24,
  color,
  className,
  ...props
}: Tennis2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3.33995 16.9997C6.10137 21.7826 12.2173 23.4214 17.0002 20.66C18.9498 19.5344 20.377 17.8514 21.1967 15.9286C22.388 13.1341 22.2963 9.83304 20.6605 6.99972C19.0246 4.1664 16.2117 2.43642 13.196 2.07088C11.1209 1.81935 8.94981 2.21386 7.00021 3.33946C2.21728 6.10089 0.578527 12.2168 3.33995 16.9997Z" stroke="black" stroke-width="1.5"/> <path d="M13.196 2.07129C13.196 2.07129 12.0983 6.17 14.5983 10.5001C17.0983 14.8303 21.1967 15.929 21.1967 15.929M2.80371 8.07129C2.80371 8.07129 6.90215 9.17 9.40215 13.5001C11.9022 17.8303 10.8044 21.929 10.8044 21.929" stroke="black" stroke-width="1.5" stroke-dasharray="1.5 2"/>
    </svg>
  );
};
