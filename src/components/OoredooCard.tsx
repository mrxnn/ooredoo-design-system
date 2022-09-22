import React from 'react';
import { Button } from '../tokens/Button';

export type Props = {
  title: string;
  subtitle: string;
  description: string;
  label: string;
  image: string;
  className?: string;
};

export const OoredooCard = ({
  title,
  subtitle,
  description,
  label,
  image,
  className,
}: Props) => {
  return (
    <div
      className={`relative flex h-52 w-[348px] flex-col items-start rounded-lg p-4 ${className}`}
    >
      <div>
        <p className="mb-0.5 text-xs font-bold uppercase tracking-wide opacity-60">
          {subtitle}
        </p>
        <p className="text-base font-bold uppercase">{title}</p>
        <div className="mt-3 flex items-center space-x-1">
          <div className="rounded-lg border border-black px-2 py-1 font-outfit text-base font-bold">
            {label}
          </div>
          <p className="text-xs font-bold">{description}</p>
        </div>
      </div>
      <Button
        variant="filled"
        className="mt-auto rounded-full px-4 py-[6px] uppercase"
      >
        Purchase
      </Button>
      <img src={image} alt="Image" className="absolute right-0 bottom-0" />
    </div>
  );
};
