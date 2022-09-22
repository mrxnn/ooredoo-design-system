import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export interface DropdownProps {
  variant: 'filled' | 'outline' | 'flat';
  children: React.ReactNode;
  className?: string;
  onSelect?: any;
  leftIcon?: React.ReactElement;
  RightIcon?: React.ReactElement;
  items: Array<{ id: number; name: string }>;
  itemClassName: string;
}

let styles = {
  filled: 'border bg-primary-red text-white border-primary-cherry',
  outline: 'border border-primary-cherry text-primary-red',
  flat: 'text-primary-red',
};

export const Dropdown = ({
  variant = 'filled',
  children,
  className,
  leftIcon,
  RightIcon,
  items,
  onSelect,
  itemClassName,
}: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={`flex items-center font-light hover:opacity-80 focus:outline-none disabled:border-ash-200 disabled:bg-ash-100 disabled:text-ash-200 ${styles[variant]} ${className}`}
      >
        {leftIcon}
        {children}
        {RightIcon}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className={`w-36 space-y-1 rounded-lg border ${styles[variant]} ${className}`}
        >
          {items.map((label: any) => (
            <DropdownMenu.Item
              key={label.id}
              onSelect={() => onSelect(label.name)}
              className={`cursor-pointer py-1 pl-1 focus:outline-none focus:ring-2 focus:ring-white ${itemClassName}`}
            >
              {label.name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
