import React, { ReactElement } from 'react';

export interface Props {
  icon: ReactElement;
  type: string;
  title: string;
  description: string;
  extras?: string;
  className?: string;
  titleColor?: string;
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
  return (
    <div className={`border rounded-lg px-2 py-3 cursor-pointer ${className}`}>
      <div className="flex items-center mb-1">
        <div className="w-10 aspect-square flex items-center justify-center">
          {React.cloneElement(icon, { size: 20 })}
        </div>
        <p className="text-xl">{type}</p>
        <div className="w-10 aspect-square ml-auto flex justify-center items-center font-semibold text-xl">{`>`}</div>
      </div>
      <div className="pl-10 text-sm space-y-0.5">
        <p className="font-semibold" style={{ color: titleColor }}>
          {title}
        </p>
        <p className="font-semibold">{description}</p>
      </div>
      <div className="text-right pr-3 mt-1">
        <p className="text-[10px] opacity-90">{extras}</p>
      </div>
    </div>
  );
};
