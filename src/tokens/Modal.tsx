import React, { HTMLAttributes, useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { StarIcon } from '../assets/Icons';
import { Button } from './Button';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;
}

export const Modal = ({ children = 'Click' }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger className="text-md rounded-md border border-primary-cherry bg-primary-red px-2 py-1 text-white">
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
          <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
            <span className="mt-16 flex justify-center text-primary-red">
              <StarIcon size={72} />
            </span>
          </DialogPrimitive.Description>
          <h1 className="mt-3.5 text-center text-base font-semibold leading-6">
            Your account has a default
            <br /> password
          </h1>
          <p className="mt-1 text-center font-notosans text-base font-normal leading-6 text-ash-300"></p>
          <div className="mt-11 flex justify-center">
            <Button variant="filled" className="h-[36px] w-[255px] rounded-3xl">
              SET PASSWORD
            </Button>
          </div>
          <div className="my-3 flex justify-center">
            <DialogPrimitive.Close className="h-[36px] w-[255px] rounded-3xl border border-primary-cherry px-4  py-2 text-sm font-medium text-primary-red text-white  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  dark:text-gray-100 ">
              CANCEL
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
