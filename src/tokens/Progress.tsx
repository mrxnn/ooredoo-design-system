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
      className={`overflow-hidden  ${className}`}
    >
      <ProgressPrimitive.Indicator
        style={{ width: `${progress}%` }}
        className="h-full bg-primary-red duration-300 ease-in-out dark:bg-white"
      />
    </ProgressPrimitive.Root>
  );
};
