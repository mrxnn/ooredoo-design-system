import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export interface Props {
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
  checked?: boolean;
}

export const Switch = ({
  className,
  onCheckedChange,
  defaultChecked = false,
  checked,
}: Props) => {
  return (
    <SwitchPrimitive.Root
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      className={`switch-root relative flex h-[30px] w-[50px] flex-shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${className}`}
    >
      <SwitchPrimitive.Thumb className="switch-thumb pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
    </SwitchPrimitive.Root>
  );
};
