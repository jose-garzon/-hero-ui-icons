import React from 'react';

interface DoublealtarrowrightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Doublealtarrowright = ({
  size = 24,
  color,
  className,
  ...props
}: DoublealtarrowrightProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5119 4.43057C10.1974 4.70014 10.161 5.17361 10.4306 5.48811L16.0122 12L10.4306 18.5119C10.161 18.8264 10.1974 19.2999 10.5119 19.5695C10.8264 19.839 11.2999 19.8026 11.5694 19.4881L17.5694 12.4881C17.8102 12.2072 17.8102 11.7928 17.5694 11.5119L11.5694 4.51192C11.2999 4.19743 10.8264 4.161 10.5119 4.43057Z"/> <path d="M6.25 5.00005C6.25 4.68619 6.44543 4.40553 6.73979 4.29664C7.03415 4.18774 7.36519 4.27366 7.56944 4.51196L13.5694 11.512C13.8102 11.7928 13.8102 12.2073 13.5694 12.4881L7.56944 19.4881C7.36519 19.7264 7.03415 19.8124 6.73979 19.7035C6.44543 19.5946 6.25 19.3139 6.25 19L6.25 5.00005Z"/>
    </svg>
  );
};
