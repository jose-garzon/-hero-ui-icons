import React from 'react';

interface LockKeyholeMinimalisticUnlockedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const LockKeyholeMinimalisticUnlocked = ({
  size = 24,
  color,
  className,
  ...props
}: LockKeyholeMinimalisticUnlockedProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C9.10051 2.75 6.75 5.10051 6.75 8V10.0036C7.13301 10 7.54849 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.1463 1.25 17.788 3.4019 18.5373 6.31306C18.6405 6.7142 18.3991 7.12308 17.9979 7.22633C17.5968 7.32957 17.1879 7.08808 17.0846 6.68694C16.5018 4.42242 14.4453 2.75 12 2.75ZM12.75 14C12.75 13.5858 12.4142 13.25 12 13.25C11.5858 13.25 11.25 13.5858 11.25 14V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V14Z"/>
    </svg>
  );
};
