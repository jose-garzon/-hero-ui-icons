import React from 'react';

interface CompassProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Compass = ({
  size = 24,
  color,
  className,
  ...props
}: CompassProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.9563 14.0949C13.763 14.2644 13.5167 14.3629 13.024 14.56C10.7142 15.4839 9.55936 15.9459 8.89971 15.4976C8.7433 15.3913 8.6084 15.2564 8.50212 15.1C8.05386 14.4404 8.51582 13.2855 9.43973 10.9757C9.6368 10.483 9.73533 10.2367 9.9048 10.0434C9.94799 9.99419 9.99435 9.94782 10.0436 9.90464C10.2368 9.73517 10.4832 9.63663 10.9759 9.43956C13.2856 8.51565 14.4405 8.0537 15.1002 8.50196C15.2566 8.60824 15.3915 8.74314 15.4978 8.89954C15.946 9.5592 15.4841 10.7141 14.5602 13.0239C14.3631 13.5165 14.2646 13.7629 14.0951 13.9561C14.0519 14.0054 14.0055 14.0517 13.9563 14.0949Z"/>
    </svg>
  );
};
