import React, { useRef } from 'react';
import { Button } from './Button';

export interface Props {
  placeholder: string;
  buttonText: string;
  className?: string;
  onClick: (value: string) => void;
}

export const SearchBox = ({
  placeholder,
  buttonText,
  className,
  onClick,
}: Props) => {
  let searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`flex ${className}`}>
      <input
        ref={searchRef}
        type="text"
        placeholder={placeholder}
        className="border rounded-full flex-1 bg-gray-100 focus:outline-none pl-4 pr-12"
      />
      <Button
        variant="filled"
        className="-translate-x-10"
        onClick={() => onClick(searchRef.current?.value || '')}
      >
        {buttonText}
      </Button>
    </div>
  );
};
