import React from 'react';
import { Button } from '../tokens/Button';

export type Props = {
  title: string;
  description: string;
  extras: string;
  image: string;
};

export const QuickAccessCard = ({
  title,
  description,
  extras,
  image,
}: Props) => {
  return (
    <div className="flex w-[214px] flex-col overflow-hidden rounded-lg border pt-8">
      <div className="px-10 text-center">
        <div className="mb-6 flex justify-center">
          <img src={image} alt={title} className="aspect-square w-[74px]" />
        </div>
        <p className="mb-1 text-xs font-bold">{title}</p>
        <p className="text-xs opacity-60">{description}</p>
        <p className="mb-4 mt-3 text-base font-bold text-primary-red">
          {extras}
        </p>
      </div>
      <Button variant="filled" className="rounded-b-lg py-[10px]">
        More Details
      </Button>
    </div>
  );
};
