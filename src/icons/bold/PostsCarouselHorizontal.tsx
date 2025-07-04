import React from 'react';

interface PostsCarouselHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PostsCarouselHorizontal = ({
  size = 24,
  color,
  className,
  ...props
}: PostsCarouselHorizontalProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5.5 16L5.5 8C5.5 6.34315 4.15685 5 2.5 5C2.22386 5 2 5.22386 2 5.5V18.5C2 18.7761 2.22386 19 2.5 19C4.15685 19 5.5 17.6569 5.5 16Z"/> <path d="M12.5 5C14.3856 5 15.3284 5 15.9142 5.58579C16.5 6.17157 16.5 7.11438 16.5 9V15C16.5 16.8856 16.5 17.8284 15.9142 18.4142C15.3284 19 14.3856 19 12.5 19H11.5C9.61438 19 8.67157 19 8.08579 18.4142C7.5 17.8284 7.5 16.8856 7.5 15L7.5 9C7.5 7.11438 7.5 6.17157 8.08579 5.58579C8.67157 5 9.61438 5 11.5 5H12.5Z"/> <path d="M18.5 8V16C18.5 17.6569 19.8431 19 21.5 19C21.7761 19 22 18.7761 22 18.5V5.5C22 5.22386 21.7761 5 21.5 5C19.8431 5 18.5 6.34315 18.5 8Z"/>
    </svg>
  );
};
