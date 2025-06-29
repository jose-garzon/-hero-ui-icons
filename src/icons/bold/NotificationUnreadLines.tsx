import React from 'react';

interface NotificationUnreadLinesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const NotificationUnreadLines = ({
  size = 24,
  color,
  className,
  ...props
}: NotificationUnreadLinesProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 14C6.25 13.5858 6.58579 13.25 7 13.25H16C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H7C6.58579 14.75 6.25 14.4142 6.25 14Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.6012 22 9.40999 21.9617 8.38802C21.1703 9.08042 20.1342 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 3.86584 14.9196 2.82967 15.612 2.03826C14.59 2 13.3988 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM6.25 17.5C6.25 17.0858 6.58579 16.75 7 16.75H13C13.4142 16.75 13.75 17.0858 13.75 17.5C13.75 17.9142 13.4142 18.25 13 18.25H7C6.58579 18.25 6.25 17.9142 6.25 17.5Z"/>
    </svg>
  );
};
