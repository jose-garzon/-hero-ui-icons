import React from 'react';

interface PostsCarouselVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PostsCarouselVertical = ({
  size = 24,
  color,
  className,
  ...props
}: PostsCarouselVerticalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 11.5C5 9.61438 5 8.67157 5.58579 8.08579C6.17157 7.5 7.11438 7.5 9 7.5H15C16.8856 7.5 17.8284 7.5 18.4142 8.08579C19 8.67157 19 9.61438 19 11.5V12.5C19 14.3856 19 15.3284 18.4142 15.9142C17.8284 16.5 16.8856 16.5 15 16.5H9C7.11438 16.5 6.17157 16.5 5.58579 15.9142C5 15.3284 5 14.3856 5 12.5V11.5Z" stroke="black" stroke-width="1.5"/> <path d="M19 2V2.5C19 3.88071 17.8807 5 16.5 5H7.5C6.11929 5 5 3.88071 5 2.5V2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M19 22V21.5C19 20.1193 17.8807 19 16.5 19H7.5C6.11929 19 5 20.1193 5 21.5V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
