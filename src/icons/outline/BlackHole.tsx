import React from 'react';

interface BlackHoleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BlackHole = ({
  size = 24,
  color,
  className,
  ...props
}: BlackHoleProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="2" stroke="black" stroke-width="1.5"/> <path d="M12 10C17 10 16.6 22 9 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M10.6316 10.6961C14.1671 7.16053 22.3695 15.9287 16.9955 21.3027" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/> <path d="M13.6799 13.3039C10.1444 16.8395 1.94198 8.07135 7.31599 2.69734" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/> <path d="M10.8513 13.5242C7.3158 9.98865 16.0839 1.78622 21.4579 7.16023" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/> <path d="M13.4602 10.4758C16.9957 14.0113 8.2276 22.2138 2.85359 16.8398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/> <path d="M10 12.3115C10 7.31152 22 7.71152 22 15.3115" stroke="black" stroke-width="1.5" stroke-linecap="round"/> <path d="M14 12C14 17 2 16.6 2 9" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};
