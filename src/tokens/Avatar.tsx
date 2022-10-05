import React, { Fragment } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export type Props = {
  renderInvalidUrls?: boolean;
  isOnline?: boolean;
  value: string;
  className: string;
};

let users = [
  'https://images.unsplash.com/photo-1573607217032-18299406d100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
];

const getRandomInitials = (value: string) => {
  if (value) {
    return value.substring(0, 2).toUpperCase();
  } else {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substring(0, 2)
      .toUpperCase();
  }
};

export const Avatar = ({
  isOnline = false,
  renderInvalidUrls = false,
  value,
  className,
}: Props) => {
  const urls = renderInvalidUrls
    ? Array.from({ length: users.length }, () => '')
    : users;

  return (
    <Fragment>
      {urls.map((src, i) => (
        <AvatarPrimitive.Root
          key={`avatar-${i}-{src}`}
          className={`relative inline-flex h-10 w-10 ${className}`}
        >
          <AvatarPrimitive.Image
            src={src}
            alt="Avatar"
            className="h-full w-full rounded-full object-cover"
          />
          {isOnline && (
            <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full">
              <span className="block h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
          )}
          <AvatarPrimitive.Fallback
            className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-800"
            delayMs={600}
          >
            <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400">
              {getRandomInitials(value)}
            </span>
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
      ))}
    </Fragment>
  );
};
