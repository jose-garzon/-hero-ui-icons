import React from 'react';

interface CirclebottomdownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Circlebottomdown = ({
  size = 24,
  color,
  className,
  ...props
}: CirclebottomdownProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10 14L2 22M2 22H8M2 22V16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 22C8.75 22.4142 8.41421 22.75 8 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V16C1.25 15.5858 1.58579 15.25 2 15.25C2.41421 15.25 2.75 15.5858 2.75 16V20.1893L9.46967 13.4697C9.76256 13.1768 10.2374 13.1768 10.5303 13.4697C10.8232 13.7626 10.8232 14.2374 10.5303 14.5303L3.81066 21.25H8C8.41421 21.25 8.75 21.5858 8.75 22Z"/> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 12.5988 2.05263 13.1853 2.15352 13.7552C3.32456 13.8341 4.25 14.809 4.25 16V16.568L8.40901 12.409C9.28769 11.5303 10.7123 11.5303 11.591 12.409C12.4697 13.2877 12.4697 14.7123 11.591 15.591L7.43198 19.75H8C9.19104 19.75 10.1659 20.6754 10.2448 21.8465C10.8147 21.9474 11.4012 22 12 22Z"/>
    </svg>
  );
};
