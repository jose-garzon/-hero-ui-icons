import React from 'react';

interface AdhesivePlaster2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AdhesivePlaster2 = ({
  size = 24,
  color,
  className,
  ...props
}: AdhesivePlaster2Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.765 20.4155L3.58447 11.235M12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765M12.765 20.4155L20.4155 12.765M20.4155 12.765L11.235 3.58447M11.235 3.58447C9.12233 1.47184 5.69709 1.47184 3.58447 3.58447C1.47184 5.69709 1.47184 9.12233 3.58447 11.235M11.235 3.58447L3.58447 11.235" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <circle cx="9.17154" cy="12" r="1" transform="rotate(-45 9.17154 12)"/> <circle cx="12.0002" cy="14.8286" r="1" transform="rotate(-45 12.0002 14.8286)"/> <circle cx="12.0002" cy="9.17139" r="1" transform="rotate(-45 12.0002 9.17139)"/> <circle cx="14.8283" cy="12" r="1" transform="rotate(-45 14.8283 12)"/>
    </svg>
  );
};
