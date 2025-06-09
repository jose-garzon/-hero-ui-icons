import React from 'react';

interface ImportProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Import = ({
  size = 24,
  color,
  className,
  ...props
}: ImportProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 4L12 14M12 14L15 11M12 14L9 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
