import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline';
  children: React.ReactNode;
}

let className = {
  filled: 'px-8 py-2 rounded-full bg-primary-red text-white',
  outline: 'px-8 py-2 rounded-full border border-primary-red text-primary-red',
};

export const Button = ({ variant, children, ...props }: Props) => {
  return (
    <button className={className[variant]} {...props}>
      {children}
    </button>
  );
};
