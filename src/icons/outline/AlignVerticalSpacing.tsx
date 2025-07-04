import React from 'react';

interface AlignVerticalSpacingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AlignVerticalSpacing = ({
  size = 24,
  color,
  className,
  ...props
}: AlignVerticalSpacingProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 3L2 3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 21L2 21" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 12C20 10.1144 20 9.17157 19.4142 8.58579C18.8284 8 17.8856 8 16 8L8 8C6.11438 8 5.17157 8 4.58579 8.58579C4 9.17157 4 10.1144 4 12C4 13.8856 4 14.8284 4.58579 15.4142C5.17157 16 6.11438 16 8 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
