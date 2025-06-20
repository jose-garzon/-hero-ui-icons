import React from 'react';

interface AlignhorizontaspacingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Alignhorizontaspacing = ({
  size = 24,
  color,
  className,
  ...props
}: AlignhorizontaspacingProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.25C3.41422 1.25 3.75 1.58579 3.75 2L3.75 22C3.75 22.4142 3.41421 22.75 3 22.75C2.58579 22.75 2.25 22.4142 2.25 22L2.25 2C2.25 1.58579 2.58579 1.25 3 1.25ZM21 1.25C21.4142 1.25 21.75 1.58579 21.75 2L21.75 22C21.75 22.4142 21.4142 22.75 21 22.75C20.5858 22.75 20.25 22.4142 20.25 22L20.25 2C20.25 1.58579 20.5858 1.25 21 1.25Z"/> <path d="M12 4C10.1144 4 9.17157 4 8.58579 4.58579C8 5.17157 8 6.11438 8 8V16C8 17.8856 8 18.8284 8.58579 19.4142C9.17157 20 10.1144 20 12 20C13.8856 20 14.8284 20 15.4142 19.4142C16 18.8284 16 17.8856 16 16V8C16 6.11438 16 5.17157 15.4142 4.58579C14.8284 4 13.8856 4 12 4Z"/>
    </svg>
  );
};
