import React from 'react';

interface ArrowtodownrightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Arrowtodownright = ({
  size = 24,
  color,
  className,
  ...props
}: ArrowtodownrightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 13.9697C6.17678 14.2626 6.17678 14.7374 6.46967 15.0303L11.4697 20.0303C11.7626 20.3232 12.2374 20.3232 12.5303 20.0303L17.5303 15.0303C17.8232 14.7374 17.8232 14.2626 17.5303 13.9697C17.2374 13.6768 16.7626 13.6768 16.4697 13.9697L12.75 17.6893L12.75 9.5C12.75 8.78668 12.9702 7.70001 13.6087 6.81323C14.2196 5.96468 15.2444 5.25 17 5.25C17.4142 5.25 17.75 4.91421 17.75 4.5C17.75 4.08579 17.4142 3.75 17 3.75C14.7556 3.75 13.2804 4.70198 12.3913 5.93677C11.5298 7.13332 11.25 8.54665 11.25 9.5L11.25 17.6893L7.53033 13.9697C7.23744 13.6768 6.76256 13.6768 6.46967 13.9697Z"/>
    </svg>
  );
};
