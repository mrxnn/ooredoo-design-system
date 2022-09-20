import React, { HTMLAttributes } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline' | 'flat';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;
  size: 'sm' | 'md' | 'lg';
}
let styles = {
  filled: 'rounded-md border bg-primary-red text-white border-primary-cherry',
  outline: 'rounded-md border border-primary-cherry text-primary-red ',
  flat: 'border text-black border-0 ',
};

let sizes = {
  sm: 'px-3 py-2.5',
  md: 'w-40 h-10',
  lg: 'w-48 h-10',
};

export const Dropdown = ({
  variant = 'filled',
  size = 'md',
  children,
  icon,
  className,
}: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={`flex justify-center place-items-center text-sm leading-[17px] font-light hover:opacity-80  disabled:bg-ash-100  disabled:text-ash-200 disabled:border-ash-200 ${styles[variant]} ${sizes[size]} ${className}`}
      >
        {children}
        {icon}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item className="text-red-600">Item</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
