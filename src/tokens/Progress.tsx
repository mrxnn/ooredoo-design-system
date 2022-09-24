import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

export interface Props {
  className?: string;
  progress?: number;
}

export const Progress = ({ progress, className }: Props) => {
  return (
    <ProgressPrimitive.Root
      value={progress}
      className="h-1  w-[292px] overflow-hidden rounded-sm bg-ash-200"
    >
      <ProgressPrimitive.Indicator
        style={{ width: `${progress}%` }}
        className={`h-full  duration-300 ease-in-out dark:bg-white ${className}`}
      />
    </ProgressPrimitive.Root>
  );
};
