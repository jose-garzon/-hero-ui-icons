import React from 'react';

interface AlarmTurnOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AlarmTurnOff = ({
  size = 24,
  color,
  className,
  ...props
}: AlarmTurnOffProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="13" r="9" stroke="black" stroke-width="1.5"/> <path d="M14.1215 15.1216L12.0002 13.0002M12.0002 13.0002L9.87891 10.8789M12.0002 13.0002L14.1216 10.8789M12.0002 13.0002L9.87892 15.1215" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3.5 4.5L7.50002 2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.5 4.5L16.5 2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
