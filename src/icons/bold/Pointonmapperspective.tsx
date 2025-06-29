import React from 'react';

interface PointonmapperspectiveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Pointonmapperspective = ({
  size = 24,
  color,
  className,
  ...props
}: PointonmapperspectiveProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M17 2C15.3431 2 14 3.34315 14 5C14 6.39788 14.9561 7.57246 16.25 7.90549L16.25 13C16.25 13.4142 16.5858 13.75 17 13.75C17.4142 13.75 17.75 13.4142 17.75 13V7.90549C19.0439 7.57245 20 6.39788 20 5C20 3.34315 18.6569 2 17 2Z"/> <path d="M8 22H16C18.4822 22 19.8752 22 20.773 21.4061L12.2591 16.7234L4.21578 21.8034C5.08705 22 6.28293 22 8 22Z"/> <path d="M10.7576 15.8976L2.51112 11.3621C2 12.2633 2 13.6389 2 16C2 18.6657 2 20.0752 2.73557 20.9642L10.7576 15.8976Z"/> <path d="M22 16C22 13.1716 22 11.7574 21.1213 10.8787C20.6314 10.3888 19.9751 10.172 19 10.0761V13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13V10H8C5.95512 10 4.64944 10 3.75091 10.332L21.6868 20.1968C22 19.3 22 18.0055 22 16Z"/>
    </svg>
  );
};
