import Link from 'next/link';
import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDownIcon, ChevronUpIcon } from '../assets/Icons';

export interface Item {
  name: string;
  href: string;
  icon?: React.ReactNode;
  isActive: boolean;
  children?: Item[];
}

export interface Props {
  items: Item[];
}

export const Sidebar = ({ items }: Props) => {
  return (
    <div className="w-[264px] bg-[#F9F9F9B2] px-[10px] py-4">
      {items?.map((item, index) => {
        return <SidebarItem item={item} key={index} />;
      })}
    </div>
  );
};

const SidebarItem = ({ item }: { item: Item }) => {
  const [open, setOpen] = useState(item.isActive);
  const hasChildren = (item.children && item.children?.length > 0) || false;

  if (hasChildren) {
    return (
      <Collapsible.Root className="mb-1.5" open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger
          className={`group flex w-full cursor-pointer items-center px-[14px] py-[18px] ${
            open ? 'rounded-t-lg' : 'rounded-lg'
          } ${
            item.isActive || open
              ? 'bg-primary-red/20 text-black'
              : 'bg-white text-[#818181]'
          }`}
        >
          <div className="mr-5 flex aspect-square w-7 items-center justify-center rounded-full bg-primary-red">
            {item.icon}
          </div>
          <p className="font-medium uppercase transition-colors group-hover:text-black">
            {item.name}
          </p>
          <div className="ml-auto transition-colors group-hover:text-black">
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content className="flex flex-col space-y-2 rounded-b-lg bg-primary-red/20 pl-[72px]">
          {item.children?.map((child, index) => {
            return (
              <div
                className={`transition-colors last:pb-4 ${
                  child.isActive
                    ? 'font-bold text-primary-red'
                    : 'text-[#818181] hover:text-black'
                }`}
              >
                <Link href={child.href} key={index}>
                  {child.name}
                </Link>
              </div>
            );
          })}
        </Collapsible.Content>
      </Collapsible.Root>
    );
  }

  return (
    <Link href={item.href}>
      <a>
        <div
          className={`group mb-1.5 flex cursor-pointer items-center rounded-lg bg-white px-[14px] py-[18px] ${
            item.isActive ? 'bg-primary-red/20 text-black' : 'text-[#818181]'
          }`}
        >
          <div className="mr-5 flex aspect-square w-7 items-center justify-center rounded-full bg-primary-red">
            {item.icon}
          </div>
          <p className="font-medium uppercase group-hover:text-black">
            {item.name}
          </p>
        </div>
      </a>
    </Link>
  );
};
