import React from 'react';

interface ExportProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Export = ({
  size = 24,
  color,
  className,
  ...props
}: ExportProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 14L12 4M12 4L15 7M12 4L9 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
