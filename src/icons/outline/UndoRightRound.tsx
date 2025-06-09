import React from 'react';

interface UndoRightRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UndoRightRound = ({
  size = 24,
  color,
  className,
  ...props
}: UndoRightRoundProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 7H9.00001C6.23858 7 4 9.23857 4 12C4 14.7614 6.23858 17 9 17H16M20 7L17 4M20 7L17 10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
