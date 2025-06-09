import React from 'react';

interface RecordMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const RecordMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: RecordMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 12C22 14.2091 20.2091 16 18 16C15.7909 16 14 14.2091 14 12C14 9.79086 15.7909 8 18 8C20.2091 8 22 9.79086 22 12Z" stroke="black" stroke-width="1.5"/> <path d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z" stroke="black" stroke-width="1.5"/> <path d="M6 16H18" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
