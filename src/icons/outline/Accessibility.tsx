import React from 'react';

interface AccessibilityProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Accessibility = ({
  size = 24,
  color,
  className,
  ...props
}: AccessibilityProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="black" stroke-width="1.5"/> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 12V13.4522M12 13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19M12 13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
