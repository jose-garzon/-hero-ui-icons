import React from 'react';

interface WhiskProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Whisk = ({
  size = 24,
  color,
  className,
  ...props
}: WhiskProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.8991 15.1272L6.85993 21.1662C5.74815 22.2779 3.94561 22.2779 2.83383 21.1662C1.72206 20.0545 1.72206 18.252 2.83383 17.1402L8.87298 11.1013M20.5484 3.45154C21.7565 4.65961 19.0984 8.12289 17.3278 9.89336C15.5573 11.6638 11.2887 15.1271 10.0806 13.9191M20.5484 3.45154C19.3403 2.24348 15.8775 4.90212 14.1069 6.67259C12.3364 8.44307 8.87246 12.711 10.0806 13.9191M20.5484 3.45154C22.772 5.67502 22.3733 9.67865 19.8158 12.236C17.2584 14.7934 12.3041 16.1425 10.0806 13.9191M20.5484 3.45154C18.3249 1.22806 14.3211 1.62672 11.7636 4.18407C9.2062 6.74142 7.85702 11.6956 10.0806 13.9191" stroke="black" stroke-width="1.5"/>
    </svg>
  );
};
