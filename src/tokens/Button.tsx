import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline';
  children: React.ReactNode;
  className?: string;
}

let styles = {
  filled: 'rounded-full bg-primary-red text-white',
  outline: 'rounded-full border border-primary-red text-primary-red',
};

export const Button = ({
  variant = 'filled',
  children,
  className,
  ...props
}: Props) => {
  return (
    <button className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
