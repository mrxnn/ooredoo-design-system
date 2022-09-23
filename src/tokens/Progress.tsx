import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

export interface Props {
  className?: string;
  progress?: number;
}

export const Progress = ({ progress }: Props) => {
  return (
    <ProgressPrimitive.Root
      value={progress}
      className="h-3 w-80 overflow-hidden rounded-full border border-primary-cherry bg-white dark:bg-gray-900"
    >
      <ProgressPrimitive.Indicator
        style={{ width: `${progress}%` }}
        className="h-full bg-primary-red duration-300 ease-in-out dark:bg-white"
      />
    </ProgressPrimitive.Root>
  );
};
