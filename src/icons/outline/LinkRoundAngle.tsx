import React from 'react';

interface LinkRoundAngleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const LinkRoundAngle = ({
  size = 24,
  color,
  className,
  ...props
}: LinkRoundAngleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.7917 15.7991L14.2223 14.3676C16.5926 11.9959 16.5926 8.15054 14.2223 5.7788C11.8521 3.40707 8.0091 3.40707 5.63885 5.7788L2.77769 8.64174C0.407436 11.0135 0.407436 14.8588 2.77769 17.2306C3.87688 18.3304 5.29279 18.9202 6.73165 19" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M11.2083 8.20092L9.77769 9.63239C7.40744 12.0041 7.40744 15.8495 9.77769 18.2212C12.1479 20.5929 15.9909 20.5929 18.3612 18.2212L21.2223 15.3583C23.5926 12.9865 23.5926 9.14118 21.2223 6.76945C20.1231 5.66957 18.7072 5.07976 17.2683 5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
