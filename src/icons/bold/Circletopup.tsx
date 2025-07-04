import React from 'react';

interface CircletopupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Circletopup = ({
  size = 24,
  color,
  className,
  ...props
}: CircletopupProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 2.75C14.5 2.33579 14.8358 2 15.25 2H21.25C21.6642 2 22 2.33579 22 2.75V8.75C22 9.16421 21.6642 9.5 21.25 9.5C20.8358 9.5 20.5 9.16421 20.5 8.75V4.56066L13.7803 11.2803C13.4874 11.5732 13.0126 11.5732 12.7197 11.2803C12.4268 10.9874 12.4268 10.5126 12.7197 10.2197L19.4393 3.5H15.25C14.8358 3.5 14.5 3.16421 14.5 2.75Z"/> <path d="M11.25 2.75C5.72715 2.75 1.25 7.22715 1.25 12.75C1.25 18.2728 5.72715 22.75 11.25 22.75C16.7728 22.75 21.25 18.2728 21.25 12.75C21.25 12.1512 21.1974 11.5647 21.0965 10.9948C19.9254 10.9159 19 9.94104 19 8.75V8.18198L14.841 12.341C13.9623 13.2197 12.5377 13.2197 11.659 12.341C10.7803 11.4623 10.7803 10.0377 11.659 9.15901L15.818 5H15.25C14.059 5 13.0841 4.07456 13.0052 2.90352C12.4353 2.80263 11.8488 2.75 11.25 2.75Z"/>
    </svg>
  );
};
