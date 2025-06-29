import React from 'react';

interface MappointfavouriteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Mappointfavourite = ({
  size = 24,
  color,
  className,
  ...props
}: MappointfavouriteProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C7.58172 2 4 5.64588 4 10.1433C4 14.6055 6.55332 19.8124 10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.6055 20 10.1433C20 5.64588 16.4183 2 12 2ZM9 8.75734C9 9.77693 10.1649 10.8543 11.0429 11.5215C11.4626 11.8405 11.6725 12 12 12C12.3275 12 12.5374 11.8405 12.9571 11.5215C13.8351 10.8543 15 9.77694 15 8.75733C15 7.02433 13.35 6.37732 12 7.71604C10.65 6.37732 9 7.02433 9 8.75734Z"/>
    </svg>
  );
};
