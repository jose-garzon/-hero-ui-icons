import React from 'react';

interface Sun2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Sun2 = ({
  size = 24,
  color,
  className,
  ...props
}: Sun2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="5" stroke="black" stroke-width="1.5"/> <path d="M12 2V4" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 20V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4 12L2 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 12L20 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19.7778 4.22266L17.5558 6.25424" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4.22217 4.22266L6.44418 6.25424" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M6.44434 17.5557L4.22211 19.7779" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19.7778 19.7773L17.5558 17.5551" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
