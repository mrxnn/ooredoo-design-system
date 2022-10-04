import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export interface Props {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;
}

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: 'Inbox',
    value: 'tab1',
  },
  {
    title: 'Today',
    value: 'tab2',
  },

  {
    title: 'Upcoming',
    value: 'tab3',
  },
];

export const Tabs = ({}: Props) => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List className="flex w-full rounded-t-lg bg-white dark:bg-gray-800">
        {tabs.map(({ title, value }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className="focus:radix-state-active:border-b-red radix-state-active:border-b-gray-700 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-gray-50 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800 group flex-1 border-b border-gray-300 px-3 py-2.5 first:rounded-tl-lg first:border-r last:rounded-tr-lg last:border-l focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:border-gray-600"
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
              {title}
            </span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({ value }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className="rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800"
        >
          <span className="text-sm text-gray-700 dark:text-gray-100">
            {
              {
                tab1: 'Your inbox is empty',
                tab2: 'Make some coffee',
                tab3: 'Order more coffee',
              }[value]
            }
          </span>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};
