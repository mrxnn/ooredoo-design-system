import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;
  size: 'sm' | 'md' | 'lg';
}

let styles = {
  filled:
    'rounded-[48px] border-[1px] bg-primary-red text-white border-primary-cherry',
  outline: 'rounded-[48px] border-[1px] border-primary-cherry text-primary-red',
};

let sizes = {
  sm: 'w-[95px] h-[42px]',
  md: 'w-[231px] h-[52px]',
  lg: 'w-[242px] h-[52px]',
};

export const Button = ({
  variant = 'filled',
  children,
  className,
  size = 'md',
  icon,
  ...props
}: Props) => {
  return (
    <button
      className={`text-sm flex justify-center place-items-center leading-[17px] font-semibold hover:opacity-80  disabled:bg-ash-100  disabled:text-ash-200 disabled:border-ash-200 ${styles[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
