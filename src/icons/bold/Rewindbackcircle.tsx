import React from 'react';

interface RewindbackcircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Rewindbackcircle = ({
  size = 24,
  color,
  className,
  ...props
}: RewindbackcircleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.564 7.46105C10.9011 7.22029 11.3695 7.29836 11.6102 7.63542C11.851 7.97248 11.7729 8.44089 11.4359 8.68165L8.21432 10.9828C7.51639 11.4813 7.51639 12.5186 8.21432 13.0171L11.4359 15.3182C11.7729 15.5589 11.851 16.0274 11.6102 16.3644C11.3695 16.7015 10.9011 16.7795 10.564 16.5388L7.34247 14.2377C5.80701 13.1409 5.80701 10.8589 7.34247 9.76215L10.564 7.46105ZM16.5 15.1318V8.86887C16.5 8.07017 15.6099 7.59378 14.9453 8.03682L10.2481 11.1683C9.65434 11.5641 9.65434 12.4366 10.2481 12.8324L14.9453 15.9639C15.6099 16.4069 16.5 15.9305 16.5 15.1318Z"/>
    </svg>
  );
};
