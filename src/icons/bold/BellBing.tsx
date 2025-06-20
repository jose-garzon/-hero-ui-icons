import React from 'react';

interface BellBingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BellBing = ({
  size = 24,
  color,
  className,
  ...props
}: BellBingProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7491 9.7041V9C18.7491 5.13401 15.7274 2 12 2C8.27256 2 5.25087 5.13401 5.25087 9V9.7041C5.25087 10.5491 5.00972 11.3752 4.5578 12.0782L3.45036 13.8012C2.43882 15.3749 3.21105 17.5139 4.97036 18.0116C9.57274 19.3134 14.4273 19.3134 19.0296 18.0116C20.789 17.5139 21.5612 15.3749 20.5496 13.8012L19.4422 12.0782C18.9903 11.3752 18.7491 10.5491 18.7491 9.7041ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V6C11.25 5.58579 11.5858 5.25 12 5.25Z"/>
    </svg>
  );
};
