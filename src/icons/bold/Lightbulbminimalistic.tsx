import React from 'react';

interface LightbulbminimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Lightbulbminimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: LightbulbminimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 18.7089C9.25 18.2894 9.58579 17.9494 10 17.9494H14C14.4142 17.9494 14.75 18.2894 14.75 18.7089C14.75 19.1283 14.4142 19.4684 14 19.4684H10C9.58579 19.4684 9.25 19.1283 9.25 18.7089ZM9.91667 21.2405C9.91667 20.821 10.2525 20.481 10.6667 20.481H13.3333C13.7475 20.481 14.0833 20.821 14.0833 21.2405C14.0833 21.66 13.7475 22 13.3333 22H10.6667C10.2525 22 9.91667 21.66 9.91667 21.2405Z"/> <path d="M7.41058 13.8283L8.51463 14.8807C8.82437 15.1759 9 15.5875 9 16.0182C9 16.6653 9.518 17.1899 10.157 17.1899H13.843C14.482 17.1899 15 16.6653 15 16.0182C15 15.5875 15.1756 15.1759 15.4854 14.8807L16.5894 13.8283C18.1306 12.3481 18.9912 10.4034 18.9999 8.3817L19 8.29678C19 4.84243 15.866 2 12 2C8.13401 2 5 4.84243 5 8.29678L5.00007 8.3817C5.00875 10.4034 5.86939 12.3481 7.41058 13.8283Z"/>
    </svg>
  );
};
