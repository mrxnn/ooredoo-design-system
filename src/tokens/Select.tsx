import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from '../assets/Icons';
import { Button } from './Button';

export interface Props {
  children: React.ReactNode;
  className?: string;
  items: string[];
  defaultValue: string;
}

export const Select = ({ items, defaultValue }: Props) => {
  return (
    <SelectPrimitive.Root defaultValue={defaultValue}>
      <SelectPrimitive.Trigger
        asChild
        aria-label="Food"
        className="rounded px-3 py-1 font-light uppercase hover:opacity-80 focus:outline-none disabled:border-ash-200 disabled:bg-ash-100 disabled:text-ash-200"
      >
        <Button variant="outline">
          <SelectPrimitive.Value placeholder="Select a fruit…" />
          <SelectPrimitive.Icon className="ml-2">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="mt-1 rounded-lg border bg-white p-2 dark:bg-gray-800">
            <SelectPrimitive.Group>
              {items &&
                items.map((f, i) => (
                  <SelectPrimitive.Item
                    key={`${f}-${i}`}
                    value={f.toLowerCase()}
                    className=" radix-disabled:opacity-50 relative
                      flex cursor-pointer select-none items-center rounded-md px-8 py-2 text-sm font-light uppercase text-gray-700 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-900"
                  >
                    <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <CheckIcon />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center  dark:text-gray-300">
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
