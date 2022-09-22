import React, { ReactElement } from 'react';
import { ChevronRightIcon } from '../assets/Icons';

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
    <div
      className={`cursor-pointer rounded-lg border px-3 pb-2 pt-4 ${className}`}
    >
      <div className="mb-3 flex items-center">
        <div className="mr-3 flex aspect-square w-10 items-center justify-center">
          {icon}
        </div>
        <p className="text-xl">{type}</p>
        <div className="ml-auto">
          <ChevronRightIcon size={24} />
        </div>
      </div>
      <div className="space-y-0.5 pl-[53.5px] text-sm">
        <p className="font-semibold" style={{ color: colors[titleColor] }}>
          {title}
        </p>
        <p className="font-semibold">{description}</p>
      </div>
      <p className="w-full -translate-x-2 text-right text-[10px] opacity-90">
        {extras}
      </p>
    </div>
  );
};
