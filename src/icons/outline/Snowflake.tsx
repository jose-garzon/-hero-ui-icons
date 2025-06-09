import React from 'react';

interface SnowflakeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Snowflake = ({
  size = 24,
  color,
  className,
  ...props
}: SnowflakeProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2V18M12 22V18M12 18L15 21M12 18L9 21M15 3L12 6L9 3" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M3.34003 7.00042L6.80413 9.00042M6.80413 9.00042L17.1964 15.0004M6.80413 9.00042L5.70605 4.90234M6.80413 9.00042L2.70605 10.0985M17.1964 15.0004L20.6605 17.0004M17.1964 15.0004L21.2945 13.9023M17.1964 15.0004L18.2945 19.0985" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20.66 7.00042L17.1959 9.00042M17.1959 9.00042L6.80364 15.0004M17.1959 9.00042L18.294 4.90234M17.1959 9.00042L21.294 10.0985M6.80364 15.0004L3.33954 17.0004M6.80364 15.0004L2.70557 13.9023M6.80364 15.0004L5.70557 19.0985" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
