import React from 'react';

interface LeafProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Leaf = ({
  size = 24,
  color,
  className,
  ...props
}: LeafProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 9.00006L16.5 4.50006M12 14.5001L18.5 8.00006M12 19.5001L19.5 12.0001" stroke="black" stroke-width="1.5"/> <path d="M12 22C16.4183 22 20 18.3541 20 13.8567C20 9.39453 17.4467 4.18759 13.4629 2.32555C12.9986 2.10852 12.4993 2 12 2M12 22C7.58172 22 4 18.3541 4 13.8567C4 9.39453 6.55332 4.18759 10.5371 2.32555C11.0014 2.10852 11.5007 2 12 2M12 22V2" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
