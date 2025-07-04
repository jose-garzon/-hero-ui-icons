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
      <path d="M8 5.5H16C17.6569 5.5 19 4.15685 19 2.5C19 2.22386 18.7761 2 18.5 2H5.5C5.22386 2 5 2.22386 5 2.5C5 4.15685 6.34315 5.5 8 5.5Z"/> <path d="M5 11.5C5 9.61438 5 8.67157 5.58579 8.08579C6.17157 7.5 7.11438 7.5 9 7.5H15C16.8856 7.5 17.8284 7.5 18.4142 8.08579C19 8.67157 19 9.61438 19 11.5V12.5C19 14.3856 19 15.3284 18.4142 15.9142C17.8284 16.5 16.8856 16.5 15 16.5H9C7.11438 16.5 6.17157 16.5 5.58579 15.9142C5 15.3284 5 14.3856 5 12.5V11.5Z"/> <path d="M16 18.5H8C6.34315 18.5 5 19.8431 5 21.5C5 21.7761 5.22386 22 5.5 22L18.5 22C18.7761 22 19 21.7761 19 21.5C19 19.8431 17.6569 18.5 16 18.5Z"/>
    </svg>
  );
};
