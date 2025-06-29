import React from 'react';

interface TestTubeMinimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TestTubeMinimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: TestTubeMinimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14.8692 2.22379C14.5731 1.92633 14.0919 1.92527 13.7944 2.22141C13.497 2.51756 13.4959 2.99876 13.7921 3.29621L14.4855 3.9927L7.53667 10.9723L8.22692 11.0493C9.61873 11.2047 10.7136 12.3074 10.8676 13.6994C10.9262 14.2289 11.2627 14.6842 11.7462 14.8941L13.7129 15.7105L19.9323 9.46362L20.7014 10.2362C20.9976 10.5336 21.4788 10.5347 21.7762 10.2386C22.0737 9.94242 22.0747 9.46122 21.7786 9.16377L14.8692 2.22379Z"/> <path d="M4.12806 14.396L6.16625 12.3488L8.05833 12.56C8.73918 12.636 9.2805 13.1767 9.35681 13.8665C9.4754 14.9386 10.159 15.8658 11.1492 16.292L12.5536 16.875L9.57484 19.8669C8.07075 21.3777 5.63215 21.3777 4.12806 19.8669C2.62398 18.3562 2.62398 15.9068 4.12806 14.396Z"/>
    </svg>
  );
};
