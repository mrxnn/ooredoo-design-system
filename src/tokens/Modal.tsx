import React, { HTMLAttributes, useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { CrossIcon } from '../assets/Icons';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline';
  children: React.ReactNode;
  className?: string;
  childrenBody: React.ReactNode;
}

export const Modal = ({
  children = 'Click',
  childrenBody,
  className,
}: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger className={` ${className}`}>
        {children}
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-20 bg-[#8E8E8E]  opacity-10" />
        <DialogPrimitive.Content
          forceMount
          className="fixed top-[50%] left-[50%] z-50 max-w-[742px] -translate-x-[50%] -translate-y-[50%] rounded-xl  bg-white p-4 shadow focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 dark:bg-gray-800 md:w-full"
        >
          <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {/* title */}
          </DialogPrimitive.Title>

          {childrenBody}
          <DialogPrimitive.Close className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <CrossIcon />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
