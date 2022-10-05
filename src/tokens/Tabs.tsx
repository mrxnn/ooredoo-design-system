import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export interface Props {
  className?: string;
  icon?: React.ReactElement;
  tabs: Tab[];
}

interface Tab {
  title: string;
  value: string;
  children: React.ReactNode;
}

export const Tabs = ({ tabs, className }: Props) => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List className="flex w-full rounded-t-lg bg-white  dark:bg-gray-800">
        {tabs.map(({ title, value }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={`tab-trigger group flex-1 border-b border-gray-300 px-3 py-2.5  focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:border-gray-600 ${className}`}
          >
            <span className="text-xl font-normal capitalize text-gray-700 dark:text-gray-100">
              {title}
            </span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({ value, children }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className="rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800"
        >
          {children}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};
