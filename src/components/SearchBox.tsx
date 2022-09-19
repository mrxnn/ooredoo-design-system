import React, { useRef } from 'react';
import { Button } from '../tokens/Button';

export interface Props {
  placeholder: string;
  buttonText: string;
  className?: string;
  onClick: (value: string) => void;
  clearOnSubmit?: boolean;
}

export const SearchBox = ({
  placeholder = 'Search',
  buttonText = 'Search',
  className,
  onClick,
  clearOnSubmit = false,
}: Props) => {
  let searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`flex ${className}`}>
      <input
        ref={searchRef}
        type="text"
        placeholder={placeholder}
        className="border rounded-full flex-1 bg-gray-100 focus:outline-none pl-4"
      />
      <Button
        variant="filled"
        size="sm"
        className="-translate-x-10 rounded-3xl font-rubik leading-[17px] font-semibold"
        onClick={() => {
          onClick(searchRef.current?.value || '');
          clearOnSubmit && (searchRef.current!.value = '');
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};
