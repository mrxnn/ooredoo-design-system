import React, { ReactElement } from 'react';

export interface Props {
  icon: ReactElement;
  type: string;
  title: string;
  description: string;
  extras?: string;
  className?: string;
  titleColor: 'red' | 'teal' | 'blue';
}

export const UsageCard = ({
  icon,
  type,
  title,
  description,
  extras,
  titleColor,
  className,
}: Props) => {
  let colors = {
    red: '#ED1C24',
    teal: '#2CD5C4',
    blue: '#0047BB',
  };

  return (
    <div className={`cursor-pointer rounded-lg border px-2 py-3 ${className}`}>
      <div className="mb-3 flex items-center">
        <div className="flex aspect-square w-10 items-center justify-center">
          {React.cloneElement(icon, { size: 20 })}
        </div>
        <p className="text-xl">{type}</p>
        <div className="ml-auto flex aspect-square w-10 items-center justify-center text-xl font-semibold">{`>`}</div>
      </div>
      <div className="space-y-0.5 pl-10 text-sm">
        <p className="font-semibold" style={{ color: colors[titleColor] }}>
          {title}
        </p>
        <p className="font-semibold">{description}</p>
      </div>
      <div className="mt-1 pr-3 text-right">
        <p className="text-[10px] opacity-90">{extras}</p>
      </div>
    </div>
  );
};
