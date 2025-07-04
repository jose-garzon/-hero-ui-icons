import React from 'react';

interface GlobusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Globus = ({
  size = 24,
  color,
  className,
  ...props
}: GlobusProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="10" r="7" stroke="black" stroke-width="1.5"/> <path d="M4 16.5623C5.88838 18.6722 8.63263 20 11.687 20C17.3827 20 22 15.3827 22 9.68699C22 6.63263 20.6722 3.88838 18.5623 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 4.55263C7.58518 5.10525 8.79066 6.61576 8.93111 8.2368C9.06238 9.75203 10.0268 10.9832 11.5 10.9999C12.0662 11.0063 12.6388 10.5822 12.6373 9.99503C12.6368 9.81346 12.6079 9.62782 12.5627 9.45703C12.4998 9.21948 12.4942 8.94619 12.625 8.66662C13.0824 7.68861 13.982 7.42589 14.6949 6.89475C15.0111 6.65918 15.2995 6.41067 15.4266 6.2105C15.7777 5.65788 16.1289 4.55263 15.9533 4" stroke="black" stroke-width="1.5"/> <path d="M19 11C18.7804 11.6207 18.625 13.25 16.1455 13.2759C16.1455 13.2759 13.9497 13.2759 13.291 14.5172C12.764 15.5103 13.0714 16.5862 13.291 17" stroke="black" stroke-width="1.5"/> <path d="M12 22V20" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 22H10" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 22H12" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
