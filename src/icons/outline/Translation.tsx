import React from 'react';

interface TranslationProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Translation = ({
  size = 24,
  color,
  className,
  ...props
}: TranslationProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19.1414 5.00003C20.9097 6.80378 22 9.27458 22 12C22 14.7578 20.8836 17.2549 19.0782 19.064M5 19.1415C3.14864 17.3265 2 14.7974 2 12C2 9.235 3.12222 6.73208 4.93603 4.92188" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.2849 8.04397C17.3458 9.05877 18 10.4488 18 11.9822C18 13.5338 17.3302 14.9386 16.2469 15.9564M7.8 16C6.68918 14.9789 6 13.556 6 11.9822C6 10.4266 6.67333 9.01843 7.76162 8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <circle cx="12" cy="12" r="2" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
