import React from 'react';

interface ParagraphSpacingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ParagraphSpacing = ({
  size = 24,
  color,
  className,
  ...props
}: ParagraphSpacingProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 21H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4 3H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 5.5L15 8.5M12 5.5L9 8.5M12 5.5V18.5M12 18.5L15 15.5M12 18.5L9 15.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
