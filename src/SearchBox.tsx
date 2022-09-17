import React from 'react';
import { Button } from './Button';

export interface Props {
  placeholder: string;
  buttonText: string;
  className?: string;
}

export const SearchBox = ({ placeholder, buttonText, className }: Props) => {
  return (
    <div className={`flex ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="border rounded-full flex-1 bg-gray-100 focus:outline-none pl-4 pr-12"
      />
      <Button variant="filled" className="-translate-x-10">
        {buttonText}
      </Button>
    </div>
  );
};
