import React from 'react';

interface MirrorRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MirrorRight = ({
  size = 24,
  color,
  className,
  ...props
}: MirrorRightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3L12 3" stroke="black" stroke-width="1.5"/> <path d="M13 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15L3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3L13 3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2.5 3"/> <path d="M12 22L12 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
