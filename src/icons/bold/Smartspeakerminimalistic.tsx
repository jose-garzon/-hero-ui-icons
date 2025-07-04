import React from 'react';

interface SmartspeakerminimalisticProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Smartspeakerminimalistic = ({
  size = 24,
  color,
  className,
  ...props
}: SmartspeakerminimalisticProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23936 2.4614C5.15124 2.85176 3.56225 4.55367 3.32102 6.65818L3.30532 6.79516C2.89823 10.3467 2.89823 13.9329 3.30532 17.4844C3.55266 19.6422 5.24868 21.3512 7.41019 21.6206L8.42569 21.7471C8.92051 21.8088 9.16792 21.8396 9.41505 21.8654C11.1335 22.0449 12.866 22.0449 14.5845 21.8654C14.8316 21.8396 15.079 21.8088 15.5738 21.7471L16.48 21.6342C18.7041 21.357 20.4473 19.5951 20.6948 17.3739L20.712 17.2199C21.1072 13.6729 21.0957 10.0925 20.6774 6.54809C20.4367 4.50764 18.8934 2.86019 16.8681 2.48157L16.5451 2.42119C13.541 1.8596 10.4585 1.8596 7.4544 2.4212L7.23936 2.4614ZM6.42501 5.51845C6.69096 5.2009 7.16399 5.15906 7.48154 5.42501C8.05871 5.90837 9.67617 6.75 12 6.75C14.3238 6.75 15.9413 5.90837 16.5185 5.42501C16.836 5.15906 17.309 5.2009 17.575 5.51845C17.8409 5.83601 17.7991 6.30904 17.4815 6.57499C16.6196 7.29688 14.6562 8.25 12 8.25C9.34383 8.25 7.38043 7.29688 6.51845 6.57499C6.2009 6.30904 6.15906 5.83601 6.42501 5.51845Z"/>
    </svg>
  );
};
