import React from 'react';

interface ClapperboardplayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Clapperboardplay = ({
  size = 24,
  color,
  className,
  ...props
}: ClapperboardplayProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2C13.8452 2 15.3293 2 16.5401 2.08783L13.0986 7.25002H8.40139L11.9014 2H12Z"/> <path d="M3.46447 3.46447C4.71683 2.2121 6.62194 2.03072 10.0957 2.00445L6.59861 7.25002H2.10418C2.25143 5.48593 2.6068 4.32213 3.46447 3.46447Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 10.7633 2 9.68875 2.02644 8.75002H21.9736C22 9.68875 22 10.7633 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM13.014 12.5852C14.338 13.4395 15 13.8666 15 14.5C15 15.1334 14.338 15.5605 13.014 16.4148C11.6719 17.2807 11.0008 17.7137 10.5004 17.3958C10 17.0779 10 16.2186 10 14.5C10 12.7814 10 11.9221 10.5004 11.6042C11.0008 11.2863 11.6719 11.7193 13.014 12.5852Z"/> <path d="M21.8958 7.25002C21.7486 5.48593 21.3932 4.32213 20.5355 3.46447C19.9382 2.86714 19.1924 2.51345 18.1987 2.30403L14.9014 7.25002H21.8958Z"/>
    </svg>
  );
};
