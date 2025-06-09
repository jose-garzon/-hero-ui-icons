import React from 'react';

interface SoundwaveCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const SoundwaveCircle = ({
  size = 24,
  color,
  className,
  ...props
}: SoundwaveCircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 7L12 17" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M17 10L17 14" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 9L7 15" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
