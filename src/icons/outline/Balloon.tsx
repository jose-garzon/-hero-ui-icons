import React from 'react';

interface BalloonProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Balloon = ({
  size = 24,
  color,
  className,
  ...props
}: BalloonProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 17.9998C16.142 18.0343 19.5937 14.0798 19.5603 9.8043C19.5268 5.52875 16.142 2.03476 12 2.00026C7.858 1.96576 4.52734 5.4038 4.56077 9.67936C4.59419 13.9549 7.858 17.9653 12 17.9998Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M15.5 9C15.4867 7.35641 14.1436 6.01326 12.5 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 20.3502C12.3212 20.3502 12.4818 20.3502 12.5933 20.3283C13.2466 20.1999 13.6441 19.5557 13.4511 18.9384C13.4181 18.833 13.342 18.6962 13.1896 18.4227M12 20.3502C11.6788 20.3502 11.5182 20.3502 11.4067 20.3283C10.7534 20.1999 10.3559 19.5557 10.5489 18.9384C10.5819 18.833 10.658 18.6962 10.8104 18.4227M12 20.3502V22.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
