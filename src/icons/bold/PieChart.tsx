import React from 'react';

interface PieChartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PieChart = ({
  size = 24,
  color,
  className,
  ...props
}: PieChartProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16312 3.77528C9.28724 4.17046 9.0675 4.59144 8.67232 4.71555C5.23899 5.7939 2.75 9.00185 2.75 12.7892C2.75 17.462 6.53805 21.25 11.2108 21.25C14.9982 21.25 18.2061 18.761 19.2845 15.3277C19.4086 14.9325 19.8296 14.7128 20.2247 14.8369C20.6199 14.961 20.8397 15.382 20.7155 15.7772C19.4465 19.8177 15.6721 22.75 11.2108 22.75C5.70962 22.75 1.25 18.2904 1.25 12.7892C1.25 8.32794 4.18231 4.55354 8.22285 3.28448C8.61803 3.16036 9.039 3.3801 9.16312 3.77528Z"/> <path d="M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z"/>
    </svg>
  );
};
