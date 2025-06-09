import React from 'react';

interface SoundwaveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Soundwave = ({
  size = 24,
  color,
  className,
  ...props
}: SoundwaveProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 4L12 20" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 7L16 17" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 7L8 17" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M20 11L20 13" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M4 11L4 13" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
