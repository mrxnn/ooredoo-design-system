import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;
}

let styles = {
  filled: 'border-[1px] bg-primary-red text-white border-primary-cherry',
  outline: 'border-[1px] border-primary-cherry text-primary-red',
};

export const Button = ({
  variant = 'filled',
  children,
  className,
  icon,
  ...props
}: Props) => {
  return (
    <button
      className={`hover:opacity-80  disabled:bg-ash-100  disabled:text-ash-200 disabled:border-ash-200 ${styles[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
