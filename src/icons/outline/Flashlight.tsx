import React from 'react';

interface FlashlightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Flashlight = ({
  size = 24,
  color,
  className,
  ...props
}: FlashlightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 11.6569V19C9 19.9319 9 20.3978 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C15 20.3978 15 19.9319 15 19V11.6569C15 10.8394 15 10.4306 15.1522 10.0631C15.3045 9.69552 15.5935 9.40649 16.1716 8.82844L16.1716 8.82843L19.4142 5.58579C19.7032 5.29676 19.8478 5.15224 19.9239 4.96847C20 4.7847 20 4.58032 20 4.17157V4C20 3.05719 20 2.58579 19.7071 2.29289C19.4142 2 18.9428 2 18 2H6C5.05719 2 4.58579 2 4.29289 2.29289C4 2.58579 4 3.05719 4 4V4.17157C4 4.58032 4 4.7847 4.07612 4.96847C4.15224 5.15224 4.29676 5.29676 4.58579 5.58579L7.82843 8.82843C8.40649 9.40649 8.69552 9.69552 8.84776 10.0631C9 10.4306 9 10.8394 9 11.6569Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15 10H9" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 13V15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4.5 5H19.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
