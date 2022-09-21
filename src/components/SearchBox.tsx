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
        className="flex-1 rounded-full border bg-gray-100 pl-4 focus:outline-none"
      />
      <Button
        variant="filled"
        className="-translate-x-10 rounded-3xl px-[23px] py-[12px] font-semibold leading-[17px]"
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
