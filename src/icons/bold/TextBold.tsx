import React from 'react';

interface TextBoldProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TextBold = ({
  size = 24,
  color,
  className,
  ...props
}: TextBoldProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.6087 1C5.61567 1 4 2.61567 4 4.6087V19.9412C4 21.6305 5.36948 23 7.05882 23H14C17.3137 23 20 20.3137 20 17C20 14.4259 18.3791 12.2304 16.1022 11.3786C17.2702 10.2839 18 8.72715 18 7C18 3.68629 15.3137 1 12 1H7.6087ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3H7.6087C6.72024 3 6 3.72024 6 4.6087V11H12ZM6 13V19.9412C6 20.5259 6.47405 21 7.05882 21H14C16.2091 21 18 19.2091 18 17C18 14.7909 16.2091 13 14 13H6Z"/>
    </svg>
  );
};
