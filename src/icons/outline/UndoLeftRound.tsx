import React from 'react';

interface UndoLeftRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const UndoLeftRound = ({
  size = 24,
  color,
  className,
  ...props
}: UndoLeftRoundProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 7H15C17.7614 7 20 9.23857 20 12C20 14.7614 17.7614 17 15 17H8.00001M4 7L7 4M4 7L7 10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
