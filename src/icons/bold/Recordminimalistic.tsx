import React from 'react';

interface RecordminimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Recordminimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: RecordminimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5.88889 16C3.74111 16 2 14.2091 2 12C2 9.79086 3.74111 8 5.88889 8C8.03666 8 9.77778 9.79086 9.77778 12C9.77778 12.8499 9.5201 13.6378 9.08073 14.2857H14.9193C14.4799 13.6378 14.2222 12.8499 14.2222 12C14.2222 9.79086 15.9633 8 18.1111 8C20.2589 8 22 9.79086 22 12C22 14.2091 20.2589 16 18.1111 16H5.88889Z"/>
    </svg>
  );
};
