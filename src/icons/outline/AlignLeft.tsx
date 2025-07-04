import React from 'react';

interface AlignLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AlignLeft = ({
  size = 24,
  color,
  className,
  ...props
}: AlignLeftProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 2V22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 7.5C7 6.56538 7 6.09808 7.20096 5.75C7.33261 5.52197 7.52197 5.33261 7.75 5.20096C8.09808 5 8.56538 5 9.5 5H18.5C19.4346 5 19.9019 5 20.25 5.20096C20.478 5.33261 20.6674 5.52197 20.799 5.75C21 6.09808 21 6.56538 21 7.5C21 8.43462 21 8.90192 20.799 9.25C20.6674 9.47803 20.478 9.66739 20.25 9.79904C19.9019 10 19.4346 10 18.5 10H9.5C8.56538 10 8.09808 10 7.75 9.79904C7.52197 9.66739 7.33261 9.47803 7.20096 9.25C7 8.90192 7 8.43462 7 7.5Z" stroke="black" stroke-width="1.5"/> <path d="M7 16.5C7 15.5654 7 15.0981 7.20096 14.75C7.33261 14.522 7.52197 14.3326 7.75 14.201C8.09808 14 8.56538 14 9.5 14H15.5C16.4346 14 16.9019 14 17.25 14.201C17.478 14.3326 17.6674 14.522 17.799 14.75C18 15.0981 18 15.5654 18 16.5C18 17.4346 18 17.9019 17.799 18.25C17.6674 18.478 17.478 18.6674 17.25 18.799C16.9019 19 16.4346 19 15.5 19H9.5C8.56538 19 8.09808 19 7.75 18.799C7.52197 18.6674 7.33261 18.478 7.20096 18.25C7 17.9019 7 17.4346 7 16.5Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
