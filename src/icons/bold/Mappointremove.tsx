import React from 'react';

interface MappointremoveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Mappointremove = ({
  size = 24,
  color,
  className,
  ...props
}: MappointremoveProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C7.58172 2 4 5.64588 4 10.1433C4 14.6055 6.55332 19.8124 10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.6055 20 10.1433C20 5.64588 16.4183 2 12 2ZM8.25 10C8.25 9.58579 8.58579 9.25 9 9.25H15C15.4142 9.25 15.75 9.58579 15.75 10C15.75 10.4142 15.4142 10.75 15 10.75H9C8.58579 10.75 8.25 10.4142 8.25 10Z"/>
    </svg>
  );
};
