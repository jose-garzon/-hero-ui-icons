import React from 'react';

interface PowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Power = ({
  size = 24,
  color,
  className,
  ...props
}: PowerProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2V6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V6.75C11.25 7.16421 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75V2.75Z"/> <path d="M8.7919 5.14692C9.17345 4.98571 9.35208 4.54571 9.19087 4.16416C9.02966 3.7826 8.58966 3.60398 8.2081 3.76519C4.70832 5.24386 2.25 8.70905 2.25 12.7501C2.25 18.1349 6.61522 22.5001 12 22.5001C17.3848 22.5001 21.75 18.1349 21.75 12.7501C21.75 8.70905 19.2917 5.24386 15.7919 3.76519C15.4103 3.60398 14.9703 3.7826 14.8091 4.16416C14.6479 4.54571 14.8265 4.98571 15.2081 5.14692C18.1722 6.39927 20.25 9.33293 20.25 12.7501C20.25 17.3065 16.5563 21.0001 12 21.0001C7.44365 21.0001 3.75 17.3065 3.75 12.7501C3.75 9.33293 5.82779 6.39927 8.7919 5.14692Z"/>
    </svg>
  );
};
